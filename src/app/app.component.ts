import { User } from './interface/user';
import { UserService } from './services/user.service';
import { Article } from './interface/article';
import { ArticleService } from './services/article.service';
import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'esercizio';

  constructor() {}

  ngOnInit() {
  }
}
