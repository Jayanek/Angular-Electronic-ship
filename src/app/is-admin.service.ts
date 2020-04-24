import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { AdminAuthGuard } from './admin-auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {

  isAdmin:boolean
  
  constructor(public auth:AuthService,private userServices:UserService) { 
    this.auth.user$.subscribe(user => {
      this.userServices.getUser(user.uid)
        .subscribe((user:AppUser) => this.isAdmin=user.isAdmin)
    })
  }

 
}
