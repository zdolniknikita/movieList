import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { AngularFireAuth } from 'angularfire2/auth'
import { auth } from 'firebase'
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  authState: any
  loginError: BehaviorSubject<string>
  registerError: BehaviorSubject<string>

  constructor(private afAuth: AngularFireAuth,
              public router: Router) { 

    this.loginError = new BehaviorSubject<string>('')
    this.registerError = new BehaviorSubject<string>('')

    afAuth.authState.subscribe(auth => {
        this.authState = auth
    })
  }

  loginGoogle = () => {
    let provider = new auth.GoogleAuthProvider()
    this.afAuth.auth.signInWithPopup(provider)
      .then(res => {
        this.authState = res.user
        this.router.navigate(['main'])
      })
      .catch(error => this.loginError.next(error.message))

    // this.afAuth.auth
  }

  loginFacebook = () => {
    let provider = new auth.FacebookAuthProvider()
    this.afAuth.auth.signInWithPopup(provider)
      .then(res => {
        this.authState = res.user
        this.router.navigate(['main'])
      })
      .catch(error => this.loginError.next(error.message))
  }

  getLoggedInUSer = () => {
    return this.afAuth.authState
  }

  // Returns true if user is logged in
get authenticated(): boolean {

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
        this.registerError.next(error.message)
      })
  }

  // login(email:string, password: string) {
  //   this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then(success => {
  //       // console.log('login success', success)
  //       this.authState = success
  //       this.router.navigate(['main'])
  //     })
  //     .catch(error => {
  //       console.log('Something went wrong:', error.message)
  //     })
  // }

  
  login(email:string, password: string) {

    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(success => {
        // console.log('login success', success)
        this.authState = success
        this.router.navigate(['main'])
      })
      .catch(error => {
        console.log('Something went wrong in login:', error.message)
        this.loginError.next(error.message)
      })
  }

  

  get currentUserObservable(): any {
    return this.afAuth.auth
  }
}
