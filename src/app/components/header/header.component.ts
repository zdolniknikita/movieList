import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service'
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: firebase.User

  constructor(private ls: LoginServiceService, private afAuth: AngularFireAuth) {
    
  }

  ngOnInit() {
    this.afAuth.authState
      .subscribe( user => {
        this.user = user
      })
  }

  logout = () => {
    this.ls.logout()
  }

}
