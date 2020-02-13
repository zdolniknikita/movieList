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
import { SignupPageComponent } from './pages/signup-page/signup-page.component'
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    data: { title: 'Предстоящие фильмы...' },
    canActivate: [AuthGuard]
  },
  {
    path: 'top',
    component: TopPageComponent,
    data: { title: 'Топ по рейтингу...' },
    canActivate: [AuthGuard]
  },
  {
    path: 'popular',
    component: PopularPageComponent,
    data: {title: 'Популярные...'},
    canActivate: [AuthGuard]
  },
  {
    path: 'genres',
    component: GenresPageComponent,
    data: {title: 'Жанры...'},
    canActivate: [AuthGuard]

  },
  {
    path: 'genre/:genreid',
    component: GenrePageComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'movie/:movieid',
    component: MoviePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'find',
    component: FindPageComponent,
    data: {title: 'Результаты поиска...'},
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'main',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
