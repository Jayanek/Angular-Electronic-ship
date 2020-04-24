import { IsAdminService } from './is-admin.service';

import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

 
  constructor(private admin:IsAdminService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    return this.admin.isAdmin

  }

  


}
