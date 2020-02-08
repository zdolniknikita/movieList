import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import M from 'materialize-css'
import { from } from 'rxjs';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {


@Input() movies: Array<any>

  src: string

  constructor() {
    this.src = ''
  }

  ngOnInit() {
      this.src = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
  }

  ngAfterViewInit() {
    
    console.log(this.movies)

    let c = document.getElementsByClassName("slider")
    let i = M.Slider.init( c[0], {height:500, indicators: true, interval: 3000 })
  }

}
