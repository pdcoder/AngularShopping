import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './modules/user-model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth : AngularFireAuth,private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl)
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      }

      get appUsers$() : Observable<AppUser>{
        return this.user$.switchMap(user=>{
          if(user) return this.userService.get(user.uid);
          return Ob;
        })
      }
}
