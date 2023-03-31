import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  article: any;
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openDeatail(event: any) {
    this.show = true;
    this.article = event;
  }

}
