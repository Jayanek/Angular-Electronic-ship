import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  get(){
    return this.db.list('categories/').snapshotChanges()
    .pipe(map(categories => categories.map(category => {
          const data = category.payload.val()
          const key = category.payload.key
          return {key,data}
    })))
  }
}
