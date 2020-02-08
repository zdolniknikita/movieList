import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.css']
})
export class GenresPageComponent implements OnInit {

  genres: Array<any>
  pageTitle: string
  
  constructor(private MS:MovieServiceService, private router: ActivatedRoute) {
    this.genres = []
    this.pageTitle = ''
  }

  async ngOnInit() {
    this.genres = await this.MS.getGenres()
    this.pageTitle = this.router.data['_value']['title']
  } 

}
