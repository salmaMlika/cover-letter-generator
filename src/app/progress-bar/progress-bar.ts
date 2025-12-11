import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressConfig } from '../models/progress.model';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.html', 
})
export class ProgressBar {
  @Input() config!: ProgressConfig;

  get progressPercentage(): number {
    return (this.config.currentStep / this.config.totalSteps) * 100;
  }
}
