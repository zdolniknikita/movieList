import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Array<any>

  constructor() {
    
  }

  ngOnInit() {

  } 

}
