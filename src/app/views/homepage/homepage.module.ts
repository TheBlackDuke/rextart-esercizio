import { AppRoutingModule } from './../../app-routing.module';
import { AuthorDetailComponent } from './../author-detail/author-detail.component';
import { HomepageComponent } from './homepage.component';
import { ArticleDetailComponent } from './../../components/article-detail/article-detail.component';
import { ArticlesComponent } from './../../components/articles/articles.component';
import { userIdPipe } from './../../pipe/userId.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    userIdPipe,
    ArticlesComponent,
    ArticleDetailComponent,
    HomepageComponent,
    AuthorDetailComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomepageModule { }
