import { User } from './../../interface/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  userData: any;
  constructor(
    private userServ: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let idUser =  this.route.snapshot.params['id'];
    this.getUserById(idUser);
  }
  getUserById(id: number) {
    this.userServ.getSingleUser(id).subscribe(res => this.userData = res)
  }
}
