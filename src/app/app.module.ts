import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './core/auth.guard'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'

// import { AngularFireModule } from '@angular/fire'
// import { AngularFireAuthModule } from '@angular/fire/auth'

import { MovieServiceService } from './services/movie-service.service'
import { LoginServiceService } from './services/login-service.service'

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
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

export const firebaseConfig ={
  apiKey: "AIzaSyDaaX9HZO9huG73c3j7qdLELvYIkhLG0do",
  authDomain: "movielist-821e7.firebaseapp.com",
  databaseURL: "https://movielist-821e7.firebaseio.com",
  projectId: "movielist-821e7",
  storageBucket: "movielist-821e7.appspot.com",
  messagingSenderId: "500465786947",
  appId: "1:500465786947:web:0dbacf24f99c857751b4f6",
  measurementId: "G-6DJEWDJCLH"
};

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
    FindPageComponent,
    SignupPageComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [MovieServiceService, LoginServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDaaX9HZO9huG73c3j7qdLELvYIkhLG0do",
    authDomain: "movielist-821e7.firebaseapp.com",
    databaseURL: "https://movielist-821e7.firebaseio.com",
    projectId: "movielist-821e7",
    storageBucket: "movielist-821e7.appspot.com",
    messagingSenderId: "500465786947",
    appId: "1:500465786947:web:0dbacf24f99c857751b4f6",
    measurementId: "G-6DJEWDJCLH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/