import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {AuthentificationService} from "./authentification.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthentificationService, private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean> | boolean{
    if (this.authService.isAuthenticate())
      return this.authService.isAuthenticate()
    else {
      this.router.navigate(['/sign-in']);
    }
  }

}
