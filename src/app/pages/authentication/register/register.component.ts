// angular import
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { RegisterModel } from 'src/app/models/auth/register.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  public signupForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
  });

  public onSubmit() {
    if (this.signupForm.valid) {
      const registerModel: RegisterModel = new RegisterModel(
        this.signupForm.value.fullname,
        this.signupForm.value.email,
        this.signupForm.value.password,
        this.signupForm.value.phoneNumber,
        this.signupForm.value.address,
        this.signupForm.value.birthday
      );
      this.authService.signup(registerModel)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err) => console.log(err),
        });
    }
  }

  // public method
  SignUpOptions = [
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
