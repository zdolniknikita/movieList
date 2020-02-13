import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.component.html',
  styleUrls: ['./find-page.component.css']
})
export class FindPageComponent implements OnInit {

  movies: Array<any>
  pageTitle: string
  query: string

  constructor(private MS: MovieServiceService, private router: ActivatedRoute) { 
    this.movies = []
    this.pageTitle = ''
    this.query = ''

    this.router.queryParams.subscribe(async query => {
      console.log('query', query)
      this.query = this.router.queryParams['_value']['query']
      this.movies = await this.MS.finMovie(this.query)
    })
  }

  async ngOnInit() {
    
    this.pageTitle = this.router.data['_value']['title']
    this.query = this.router.queryParams['_value']['query']
    this.movies = await this.MS.finMovie(this.query)
  }

}
