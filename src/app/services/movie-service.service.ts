import { Injectable } from '@angular/core';
import axios from '../helpers/axios'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  findedMovies: Array<any>
  
  constructor(private RM: Router) {
    this.findedMovies = []
   }


  getUpComingMovies = async () => {
    return await axios.get('/movie/upcoming')
      .then(res => res.data.results)
  }

  getPopularMovies = async () => {
    return await axios.get('/movie/popular')
      .then(res => res.data.results)
  }

  getTopRatedrMovies = async () => {
    return await axios.get('/movie/top_rated')
      .then(res => res.data.results)
  }

  getSingleMovie = async (movieid: number) => {
    return await axios.get(`/movie/${movieid}`)
      .then(res => res.data)
  }

  getGenres = async () => {
    return await axios.get('/genre/movie/list')
      .then(res => res.data.genres)
  }

  getMoviesByGenreId = async (genreid: number) => {
    return await axios.get('/discover/movie', {
      params: { 
          with_genres: genreid
      }
  })
    .then(res => res.data.results)
  }

  finMovie = async (query: string) => {
   this.findedMovies =  await axios.get('/search/movie', {
      params: { 
          query: query
      }
  })
  .then(res => res.data.results)  

  return this.findedMovies
}
  
  routeTo = (pageName: string) => {
    this.RM.navigate([pageName])
  }

}

