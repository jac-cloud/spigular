import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      alert('You do not have permission to view this page');
      return false;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      alert('You do not have permission to load this module');
      this.router.navigate(['/']);
      return false;
    }
  }
}
