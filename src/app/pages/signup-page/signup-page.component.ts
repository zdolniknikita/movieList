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

  constructor(private ls: LoginServiceService) { }

  ngOnInit() {
  }

  signup = () => {
    this.ls.signup(this.name, this.email, this.password)
    this.email = this.password = ''
  }

}
