import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  submit(e: Event): void {
    e.preventDefault();

    if (!this.email || this.password.length < 4) {
      alert('Email + contraseña deben tener al menos 4 caracteres');
      return;
    }

    this.auth.login(this.email, this.password);
    this.router.navigateByUrl('/projects');
  }
}
