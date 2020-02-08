import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  movies: Array<any>
  pageTitle: string

  constructor(private MS: MovieServiceService,  private router: ActivatedRoute) {
    this.movies = []
    this.pageTitle = ''

  }

  async ngOnInit() {
    this.movies = await this.MS.getUpComingMovies()
    this.pageTitle = this.router.data['_value']['title']
  }

  
}
