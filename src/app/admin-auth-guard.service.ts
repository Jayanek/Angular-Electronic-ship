
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

 
  constructor(private auth:AuthService,private userServices:UserService) { }

  public isAdmin:boolean=false

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

      this.auth.user$.subscribe(user => {
        this.userServices.getUser(user.uid)
          .subscribe((user:AppUser) => this.isAdmin=user.isAdmin)
      })
     
    return this.isAdmin;
  }

  getAdminStatus():boolean{
    return this.isAdmin;
  }


}
