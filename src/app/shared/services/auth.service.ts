import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = true;
  redirectUrl!: string;

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    return of({login: 'admin', password: '123'}).pipe(delay(1000)).pipe(
      map((res: any) => login === res.login && password === res.password ? this.isLoggedIn = true : false)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
