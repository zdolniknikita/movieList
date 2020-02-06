import { Injectable } from '@angular/core';
import axios from '../helpers/axios'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }


  getMovies = async () => {
    await axios.get('/movie/popular')
      .then(res => console.log(res.data))
  }

  


}

