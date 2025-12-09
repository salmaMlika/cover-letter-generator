import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LlmService } from '../services/llm.service';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-cover-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cover-form.html',
})
export class CoverForm {
  resumeText = '';
  jobTitle = '';
  companyName = '';
  jobDescription = '';
  currentStep = 1;
  loading = false;
  generatedLetter = '';
  selectedTone = 'professional';

  isEditing = false;
  originalLetter = '';
  user: User | null = null;

  constructor(
    private llmService: LlmService,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {
    this.authService.user$.subscribe(u => {
      this.user = u;
      this.cd.detectChanges();
    });
  }

  async generateCover() {
    if (!this.user) {
      const loggedInUser = await this.authService.login();
      if (!loggedInUser) return;
      this.user = loggedInUser;
    }

    this.loading = true;
    this.generatedLetter = '';
    this.isEditing = false;

    
    
    const userName = this.user?.displayName || '[Your Name]';
    const userEmail = this.user?.email || '[Your Email]';

    const prompt = `Write a complete and professional cover letter with these EXACT details:

HEADER (use this exact format):
${userName}
${userEmail}

Hiring Manager
${this.companyName || 'the company'}

Dear Hiring Manager,

CANDIDATE INFORMATION:
- Name: ${userName}
- Position applying for: ${this.jobTitle || 'Software Developer'}
- Company name: ${this.companyName || 'the company'}

CANDIDATE EXPERIENCE:
${this.resumeText || 'General software development experience'}

JOB REQUIREMENTS:
${this.jobDescription || 'General software development position'}

INSTRUCTIONS:
- Tone: ${this.selectedTone}
- Use exact company and job titles provided
- Use the candidate name in the letter naturally
- No generic placeholders like [Name], [Company], etc.
- Include proper header with name and email at top
- Concise 300-400 words
- End with "Sincerely, ${userName}"`;

    this.llmService.generate(prompt).subscribe({
      next: res => {
        console.log("mriguel",res)
        let letter = res.response || res.text || JSON.stringify(res);
        this.generatedLetter = this.cleanupLetter(letter);
        this.originalLetter = this.generatedLetter;
        this.loading = false;
        this.cd.detectChanges();
      },
      error: err => {
        console.error(err);
        this.generatedLetter = 'Error generating cover letter.';
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }

  cleanupLetter(letter: string): string {
    return letter.trim();
  }

  continue() {
    if (this.currentStep < 3) this.currentStep++;
  }

  goBack() {
    if (this.currentStep > 1) this.currentStep--;
  }

  toggleEdit() { this.isEditing = true; this.originalLetter = this.generatedLetter; }
  saveEdit() { this.isEditing = false; alert('✅ Changes saved successfully!'); }
  cancelEdit() { this.generatedLetter = this.originalLetter; this.isEditing = false; }

  copyToClipboard() {
    if (!this.generatedLetter) return alert('No cover letter to copy!');
    navigator.clipboard.writeText(this.generatedLetter)
      .then(() => alert('✅ Cover letter copied!'))
      .catch(() => alert('❌ Failed to copy'));
  }

  exportToPDF() {
    if (!this.generatedLetter) return alert('No cover letter to export!');
    const printWindow = window.open('', '', 'height=800,width=800');
    if (!printWindow) return alert('Please allow pop-ups');

    printWindow.document.write(`<html><head><title>Cover Letter</title></head><body>${this.generatedLetter.replace(/\n/g, '<br>')}</body></html>`);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
  }
}