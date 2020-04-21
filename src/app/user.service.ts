import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  getUser(userId){
    return this.db.object('/users/'+userId).snapshotChanges().pipe(map((res)=>{
        return res.payload.val()
    }))
  }
}
