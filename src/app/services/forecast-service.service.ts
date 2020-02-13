import { Injectable } from '@angular/core';
import axios from 'axios'

const api_key = 'e58a31fcbc29266c0b661805a06a46ec'

@Injectable({
  providedIn: 'root'
})
export class ForecastServiceService {

  constructor() { }
  
  getForecast = async (options) => {

    const { latitude, longitude } = options

    return await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&lang=ru&units=metric&`)
      .then(res => res.data)
      .catch(error => console.log(error))
  }

}



