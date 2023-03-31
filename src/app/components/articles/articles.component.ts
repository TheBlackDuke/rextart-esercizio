import { zip } from 'rxjs';
import { User } from './../../interface/user';
import { Article } from './../../interface/article';
import { ArticleService } from './../../services/article.service';
import { UserService } from './../../services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articleList: Article[] = [];
  users: User[] = [];
  show: boolean = false;
  article: any;

  @Output() clickEmit = new EventEmitter();
  constructor(
    private articleServ: ArticleService,
    private userServ: UserService) {
    zip(this.userServ.getUser(), this.articleServ.getPost())
      .subscribe(x => {
        this.articleList = x[1];
        this.users = x[0];
      })
  }
  ngOnInit(): void {
  }
  getFirstLetters(event: string) {
    return event.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
  }
  openDeatail(event: any) {
    this.clickEmit.emit(event)
  }
}
