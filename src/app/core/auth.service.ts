import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly AUTH_KEY = 'auth_state';

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  login(email: string, password: string): boolean {
    if (this.isBrowser()) {
      localStorage.setItem(this.AUTH_KEY, 'true');
    }
    return true;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.AUTH_KEY);
    }
  }

  isAuthenticated(): boolean {
    return this.isBrowser() && localStorage.getItem(this.AUTH_KEY) === 'true';
  }
}
