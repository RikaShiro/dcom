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
  constructor(
    private fb: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      vcode: [null, [Validators.required]],
    });
  }
  login(): void {
    if (this.loginForm.valid) {
      const $ = this.loginForm.value;
      delete $.vcode
      this.router.navigate(['/layout/disk-monitor/disk-status']);
      this.loginService.postLogin($).subscribe((res) => {
        console.log(res);

      });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
