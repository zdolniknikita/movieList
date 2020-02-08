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
  }

  async ngOnInit() {

    const { query } = this.router.queryParams['_value']
    
    this.pageTitle = this.router.data['_value']['title']
    this.movies = await this.MS.finMovie(query)
    this.query = query
  }

}
