import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {

  @Input() src: string
  @Input() class: string

  loaded: boolean

  constructor() {
    this.loaded = false
   }

  ngOnInit() {
    if (this.src) {
      let img = document.createElement("img");
      img.onload = this.onload;
      img.src = this.src;
      console.log('src', this.class)  
    } else {
      console.log('no src')
    } 
  }

  onload = () => {
    this.loaded = true
  }





}
