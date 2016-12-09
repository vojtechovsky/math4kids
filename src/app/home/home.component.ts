import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pvo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isFront: boolean[];

  ngOnInit() {
  }

  constructor() {
    this.isFront = [];
  }

  public toggleClass(id: number) {
    this.isFront[id] = !this.isFront[id];
  }
}
