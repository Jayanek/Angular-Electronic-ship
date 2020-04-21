import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private fireAuth:firebase.auth.Auth = this.afAuth.auth


  user$:Observable<firebase.User>

  constructor(private afAuth:AngularFireAuth,private router:ActivatedRoute) {
    this.user$ = this.afAuth.authState
   }

  userLogin(){

    this.storeRedirectedUrl()
    this.fireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  userLogout(){
    this.fireAuth.signOut()
  }

  private storeRedirectedUrl(){
    let returnUrl =  this.router.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl',returnUrl)
  }

}
