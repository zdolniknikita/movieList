import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service'

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  name: string
  email: string
  password: string
  error: string

  constructor(private ls: LoginServiceService) { }

  ngOnInit() {
    this.ls.registerError.subscribe(val => this.error = val)
  }

  signup = () => {
    this.ls.signup(this.name, this.email, this.password)
    this.email = this.password = ''
  }

}
