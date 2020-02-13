import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieServiceService } from '../../services/movie-service.service'

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie: any
  src: string
  
  constructor(private router: ActivatedRoute, private MS: MovieServiceService) {
    this.movie = {}
    this.src = ''  
  }
  
  async ngOnInit() {

    let movieid = +this.router.params['_value']['movieid']
    this.movie = await this.MS.getSingleMovie(movieid)

    this.movie['release_date'] = new Date(this.movie['release_date']).getFullYear()

    this.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.movie['poster_path']}`
    console.log(this.src)
  
  }

}
