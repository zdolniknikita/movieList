import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'find-form',
  templateUrl: './find-form.component.html',
  styleUrls: ['./find-form.component.css']
})

export class FindFormComponent implements OnInit {

  query: string

  constructor(private MS: MovieServiceService, private router: Router, private activeRouter: ActivatedRoute) {
    this.query = ''
  }

  ngOnInit() {
  }

  onChange = (e) => {
    this.query = e.target.value
  }

  onSubmit = () => {
    const { query, router, clearQuery, activeRouter } = this

    if (query) router.navigate(['find'], { queryParams: { query } })
    // this.MS.finMovie(query) 
    clearQuery()
  }

  clearQuery = () => this.query = ''
}
