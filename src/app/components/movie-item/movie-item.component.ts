import { Component, OnInit, Input } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: any

  src: string

  constructor(private MS: MovieServiceService) {
    this.src = ''
  }

  ngOnInit() {
    // console.log(this.movie)
    this.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.movie.poster_path}`
  }

  onClick = (id: number) => {
    this.MS.routeTo(`movie/${id}`)
  }

}
