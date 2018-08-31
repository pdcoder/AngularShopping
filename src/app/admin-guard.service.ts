import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private auth: AuthService, private userService : UserService) { }

  canActivate(): Observable<boolean>{
    return this.auth.user$.swithMap(user=> this.userService.get(user.uid))
    .map(appUser => appUser.isAdmin)
  }
}
