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
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  login(): void {
    this.loading = true;
    if (this.loginForm.valid) {
      const $ = this.loginForm.value;
      this.loginService.postLogin($).subscribe((res) => {
        console.log(res);
        if (res.code === 200) {
          const username = res.data.username;
          // this.router.navigate(['/layout/disk-monitor/disk-status']);
        }
      });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
