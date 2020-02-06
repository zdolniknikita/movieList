import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
 
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private MS: MovieServiceService) { }

  async ngOnInit() {
    await this.MS.getMovies()
  } 

}
