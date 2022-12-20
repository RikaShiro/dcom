import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  loading = false;

  constructor(
    private fb: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    });
  }
  login(): void {
    this.loading = true;
    if (this.loginForm.valid) {
      const $ = new FormData();
      $.append('username', this.loginForm.get('username')?.value);
      $.append('password', this.loginForm.get('password')?.value);
      this.loginService.postLogin($).subscribe((res) => {
        console.log(res);
        if (res.code === 200) {
          localStorage.setItem('username', res.username!);
          setTimeout(() => {
            this.loading = false
            this.router.navigate(['/layout/disk-monitor/disk-status']);
          }, 1000);
        }
      });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
