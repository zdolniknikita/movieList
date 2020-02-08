import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'find-form',
  templateUrl: './find-form.component.html',
  styleUrls: ['./find-form.component.css']
})

export class FindFormComponent implements OnInit {

  query: string

  constructor(private MS: MovieServiceService, private router: Router) {
    this.query = ''
  }

  ngOnInit() {
  }

  onChange = (e) => {
    this.query = e.target.value
  }

  onSubmit = () => {
    const { query, router, clearQuery } = this
    console.log(`submit find form, query = ${query}`)

    if (query) router.navigate(['find'], { queryParams: { query } }) 
    clearQuery()
  }

  clearQuery = () => this.query = ''
}
