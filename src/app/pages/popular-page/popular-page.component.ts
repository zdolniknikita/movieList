import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit {

  movies: Array<any>
  pageTitle: string
  constructor(private MS: MovieServiceService, private router: ActivatedRoute) { 
    this.movies = []
    this.pageTitle = ''
  }

  async ngOnInit() {
    this.movies = await this.MS.getPopularMovies()
    this.pageTitle = this.router.data['_value']['title']
    console.log(this.router)
  }

}
