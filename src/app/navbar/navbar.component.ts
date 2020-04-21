import { IsAdminService } from './../is-admin.service';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../admin-auth-guard.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(public auth:AuthService,public adminStat:AdminAuthGuard) {}

  
  logout(){
    this.auth.userLogout()
  }
  
}
