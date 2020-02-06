import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private MS: MovieServiceService) { }

  async ngOnInit() {
    await this.MS.getMovies()
  }

}
