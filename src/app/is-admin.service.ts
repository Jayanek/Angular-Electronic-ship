import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { AdminAuthGuard } from './admin-auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {

  
  constructor(private adminStatus:AdminAuthGuard ) { }

  isAdmin():boolean{

   return this.adminStatus.getAdminStatus()

  }
}
