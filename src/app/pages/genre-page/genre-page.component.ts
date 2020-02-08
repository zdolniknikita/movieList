import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent implements OnInit {

  movies: Array<any>
  pageTitle: string

  constructor(private MS: MovieServiceService, private router: ActivatedRoute) {
    this.movies = []
    this.pageTitle = ''
  }

  async ngOnInit() {
    let genreid = this.router.params['_value']['genreid']
    this.movies = await this.MS.getMoviesByGenreId(genreid)
    this.pageTitle = this.router.fragment['_value']
  }

}
