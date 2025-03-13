import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminCanLoadGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthorized = this.checkAuthorization();
    if (!isAuthorized) {
      this.router.navigate(['/']);
    }
    return isAuthorized;
  }

  private checkAuthorization(): boolean {
    // Implement your authorization logic here
    return true; // Placeholder: Replace with actual authorization check
  }
}
