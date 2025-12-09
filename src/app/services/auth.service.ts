import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { environment, firebaseConfig } from '../../environements/environement'; // ✅ import du config Firebase

// Initialise Firebase une seule fois avec la config depuis environment
const app = initializeApp(firebaseConfig);

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = getAuth(app);
  public user$ = new BehaviorSubject<User | null>(null);

  constructor() {
    this.auth.onAuthStateChanged(user => this.user$.next(user));
  }

  async login(): Promise<User | null> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.user$.next(result.user);
      return result.user;
    } catch (err) {
      console.error('Login failed:', err);
      return null;
    }
  }

  logout() {
    this.auth.signOut();
    this.user$.next(null);
  }
}
