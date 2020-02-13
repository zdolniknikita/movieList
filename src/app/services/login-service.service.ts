import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { AngularFireAuth } from 'angularfire2/auth'
import { auth } from 'firebase'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  authState: any
  loginError: Observable<string>
  registerError: any

  constructor(private afAuth: AngularFireAuth,
              public router: Router) { 

    afAuth.authState.subscribe(auth => {
        console.log("AUTH = ", auth)
        this.authState = auth
    })

    this.loginError = new Observable(value => value.next('default error'))
  }

  loginGoogle = () => {
    let provider = new auth.GoogleAuthProvider()
    this.afAuth.auth.signInWithPopup(provider)
      .then(res => {
        this.authState = res.user
        this.router.navigate(['main'])
      })
      .catch(error => this.loginError = error.message)

    // this.afAuth.auth
  }

  loginFacebook = () => {
    let provider = new auth.FacebookAuthProvider()
    this.afAuth.auth.signInWithPopup(provider)
      .then(res => {
        this.authState = res.user
        this.router.navigate(['main'])
      })
      .catch(error => this.loginError = error.message)
  }

  getLoggedInUSer = () => {
    return this.afAuth.authState
  }

  // Returns true if user is logged in
get authenticated(): boolean {
  // console.log('authenticated', this.authState)
  // if (this.authState) return true
  if (this.authState) return true
  return false
}

  logout = async () => {
    // console.log('logout')
    await this.afAuth.auth.signOut()
    this.router.navigate(['login'])
  }

  signup(name:string, email:string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(success => {
        // console.log('registration success', success)
        this.authState = success

        this.router.navigate(['main'])
      })
      .catch(error => {
        console.log('Something went wrong:', error.message)
        this.registerError = error.message
      })
  }

  login(email:string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(success => {
        // console.log('login success', success)
        this.authState = success
        this.router.navigate(['main'])
      })
      .catch(error => {
        console.log('Something went wrong:', error.message)
        this.loginError.next(error.message)
        // this.loginError. (error.message)
        // this.router.navigate(['signup'])
      })
  }

  

  get currentUserObservable(): any {
    return this.afAuth.auth
  }
}
