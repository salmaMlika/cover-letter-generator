import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './hero-page.html',
})
export class HeroPage {
  user: User | null = null;

  constructor(public authService: AuthService) {
    // S’abonner à user$ pour savoir si quelqu’un est connecté
    this.authService.user$.subscribe(u => this.user = u);
  }
}