import { User } from './../../interface/user';
import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  show: boolean = false;
  article: any;
  users: User[] = [];
  @Input() articleData: any;
  constructor(
    private userServ: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userServ.getUser().subscribe(res => this.users = res)
  }
  goTo(id: any) {
    console.log(id);
    this.router.navigate(['dettaglio/' + id])
  }
}
