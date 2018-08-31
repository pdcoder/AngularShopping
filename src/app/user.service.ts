import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AppUser } from './modules/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db : AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users'+ user.uid).update({
      name : user.displayName,
      mail : user.email
    });
  }

  get(uid: string): AngularFireObjectObservable<AppUser>{
    return this.db.object('/users/'+uid);
  }
}
