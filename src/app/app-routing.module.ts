import { AuthorDetailComponent } from './views/author-detail/author-detail.component';
import { HomepageModule } from './views/homepage/homepage.module';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: HomepageComponent,
    loadChildren: () => import('./views/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'dettaglio/:id', 
    component: AuthorDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
