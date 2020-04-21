import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth:AuthService,private route:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{

    return this.auth.user$.pipe(map((user) => {
      if(user) return true

      this.route.navigate(['/login'],{
        queryParams:{
          returnUrl : state.url
        }
      })
      return false
    }))


  }
}
