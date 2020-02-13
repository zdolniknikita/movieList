import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service'
import { AngularFireAuth } from 'angularfire2/auth'
import M from 'materialize-css'


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  user: firebase.User

  constructor(private ls: LoginServiceService, private afAuth: AngularFireAuth) {
    
  }

  ngOnInit() {
    this.afAuth.authState
      .subscribe( user => {
        this.user = user
      })
  }

  ngAfterViewInit() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  }

  logout = () => {
    this.ls.logout()
  }

}
