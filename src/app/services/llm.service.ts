// src/app/services/llm.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LlmService {
   private apiUrl = 'http://localhost:11434/api/generate';

  constructor(private http: HttpClient) {}

  generate(prompt: string): Observable<any> {
    const body = {
      model: 'tinyllama',
      prompt: prompt,
      stream: false
    };

    return this.http.post(this.apiUrl, body);
  }
}
