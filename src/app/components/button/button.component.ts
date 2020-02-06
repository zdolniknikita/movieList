import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() title: string
  @Input() class: string
  // @Input() type: string
  // @Output() click = new EventEmitter()

  ngOnInit() {
  }

  onClick = () => {
    console.log("click")
  }

}
