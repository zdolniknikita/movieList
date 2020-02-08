import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component'
import { PopularPageComponent } from './pages/popular-page/popular-page.component'
import { GenresPageComponent } from './pages/genres-page/genres-page.component'
import { TopPageComponent } from './pages/top-page/top-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { MoviePageComponent } from './pages/movie-page/movie-page.component'
import { GenrePageComponent } from './pages/genre-page/genre-page.component'
import { FindPageComponent } from './pages/find-page/find-page.component'


const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    data: { title: 'Предстоящие фильмы...' }
  },
  {
    path: 'top',
    component: TopPageComponent,
    data: { title: 'Топ по рейтингу...' }
  },
  {
    path: 'popular',
    component: PopularPageComponent,
    data: {title: 'Популярные...'}
  },
  {
    path: 'genres',
    component: GenresPageComponent,
    data: {title: 'Жанры...'}

  },
  {
    path: 'genre/:genreid',
    component: GenrePageComponent 
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'movie/:movieid',
    component: MoviePageComponent
  },
  {
    path: 'find',
    component: FindPageComponent,
    data: {title: 'Результаты поиска...'}
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
