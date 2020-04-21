import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electronic-shop';

  constructor(
    private auth:AuthService,
    private route:Router,
    private db:AngularFireDatabase)

    {

    this.auth.user$.subscribe((user) => {
      if(user){
        let returnUrl = localStorage.getItem('returnUrl')
        this.route.navigateByUrl(returnUrl)

        this.db.object('/users/'+user.uid).update({
          name:user.displayName,
          email:user.email
        })

      }
    })

  }
}
