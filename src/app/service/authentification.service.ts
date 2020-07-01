import {Inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {LOCAL_STORAGE} from "angular-webstorage-service";

@Injectable({providedIn: 'root'})
export class AuthentificationService {
  isAuth = false;

  constructor(private route: Router){}

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true ;
             sessionStorage.setItem(`isAuth`, `true`);
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    sessionStorage.removeItem(`isAuth`);
    this.route.navigate(['/sign-in'])
  }

  isAuthenticate():boolean{
    let session =  sessionStorage.getItem(`isAuth`);
    if (session==='true')
      return true;
    else
      return false
  }
}
