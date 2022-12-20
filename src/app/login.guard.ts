import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      window.alert('Sign in is required.');
      this.router.navigate(['/login']);
      return false;
    }
  }

  canDeactivate(
    _component: unknown,
    _currentRoute: ActivatedRouteSnapshot,
    _currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(nextState);
    const backToLogin = nextState?.url === '/login';
    console.log(backToLogin)
    return true
    if (backToLogin && this.loginService.isLoggedIn()) {
      return false;
    } else {
      return true;
    }
    // if (this.loginService.isLoggedIn()) {
    //   window.alert('cannot return to login page after loggin in');
    //   this.router.navigate(['/layout/disk-monitor/disk-status']);
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
