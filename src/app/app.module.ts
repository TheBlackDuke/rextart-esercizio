import { userIdPipe } from './pipe/userId.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AuthorDetailComponent } from './views/author-detail/author-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
