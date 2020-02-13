// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { LoginServiceService } from '../services/login-service.service'

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private ls: LoginServiceService, private router: Router) {

//   }
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//       if(this.ls.authenticated) {
//         return true
//       }

//       console.log('access denied')
//       this.router.navigate(['login'])
//       return false
    
//   }
  
// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators'
import { AngularFireAuth } from 'angularfire2/auth'



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.afAuth.authState
      .pipe(
        take(1))
      .pipe(
        map(user => {
          return !!user
        })
      )
      .pipe(
        tap(loggedIn => {
          if (!loggedIn) {
            console.log("access denied")
            this.router.navigate(['/login']);
          }
      })
      )

   }
}





