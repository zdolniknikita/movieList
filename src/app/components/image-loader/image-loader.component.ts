import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {

  @Input() src: string

  loaded: boolean

  constructor() {
    this.loaded = false
   }

  ngOnInit() {
    let img = document.createElement("img");
        img.onload = this.onload;
        img.src = this.src;
  }

  onload = () => {
    this.loaded = true
  }





}
