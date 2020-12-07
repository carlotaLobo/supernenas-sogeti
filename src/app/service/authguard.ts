import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}

  public canActivate() {
    if (localStorage.getItem('token') == null) {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
