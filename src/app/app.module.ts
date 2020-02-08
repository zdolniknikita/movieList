import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FindFormComponent } from './components/find-form/find-form.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { FindPageComponent } from './pages/find-page/find-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    MovieListComponent,
    MovieItemComponent,
    ImageLoaderComponent,
    MainPageComponent,
    PopularPageComponent,
    GenresPageComponent,
    TopPageComponent,
    LoginPageComponent,
    CarouselComponent,
    FindFormComponent,
    MoviePageComponent,
    GenrePageComponent,
    FindPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
