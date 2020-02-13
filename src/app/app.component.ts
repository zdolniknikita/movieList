import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'movieList';

  user: firebase.User

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.afAuth.authState
      .subscribe( user => {
        this.user = user
        // this.router.navigateByUrl('main')
      })
  }

  
}
