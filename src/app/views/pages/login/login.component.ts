import { Component, signal } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, FormLabelDirective } from '@coreui/angular';
import { AuthService } from '../../../core/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ContainerComponent,
    CommonModule, FormDirective, FormLabelDirective, FormsModule,
    RouterModule, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, FormControlDirective, ButtonDirective, NgStyle]
})
export class LoginComponent {
  readonly secret = signal('SecretPassword');
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

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

