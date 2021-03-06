import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'
import { LoginServiceService } from '../../services/login-service.service'

 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  user: firebase.User

  email: string
  password: string
  error: any

  constructor(private ls: LoginServiceService) {

    
  }

  ngOnInit() {
    this.ls.getLoggedInUSer()
      .subscribe(user => {
        this.user = user
      })

      this.ls.loginError.subscribe(val => this.error = val)
  }

  loginGoogle = () => this.ls.loginGoogle()
  loginFacebook = () => this.ls.loginFacebook()


  login = () => {
    this.ls.login(this.email, this.password)
    this.email = this.password = ''
  }

}
