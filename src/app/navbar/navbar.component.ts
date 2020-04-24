import { IsAdminService } from './../is-admin.service';
import { AuthService } from './../auth.service';
import { Component} from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  
  constructor(public auth:AuthService,public admin:IsAdminService) {}

  logout(){
    this.auth.userLogout()
  }
  
}
