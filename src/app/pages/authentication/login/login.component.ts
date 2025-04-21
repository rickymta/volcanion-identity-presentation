// angular import
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginModel } from 'src/app/models/auth/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  protected loginForm = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const loginModel: LoginModel = new LoginModel(this.loginForm.value.phoneNumber ?? '', this.loginForm.value.password ?? '', this.loginForm.value.rememberMe ?? false);
      this.authService.login(loginModel).subscribe({
        next: (data: any) => {
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']).then(r => console.log(r));
          }
          console.log(data);
        },
        error: (err: any) => {
          console.error('Login failed', err);
        }
      });
    }
  }

  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
