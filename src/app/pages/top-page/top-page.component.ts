import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  movies: Array<any>
  pageTitle: string
  
  constructor(private MS: MovieServiceService, private router: ActivatedRoute) {
    this.movies = []
    this.pageTitle = ''

   }

  async ngOnInit() {
    this.movies = await this.MS.getTopRatedrMovies()
    this.pageTitle = this.router.data['_value']['title']
  }

}
