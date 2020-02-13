import { Component, OnInit } from '@angular/core';
import { ForecastServiceService } from '../../services/forecast-service.service'
import axios from 'axios'
import { error } from 'protractor';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  forecast: object
  constructor(private FS: ForecastServiceService) { }


  async ngOnInit() {
    const coords = await navigator.geolocation.getCurrentPosition(res => {
      const { longitude, latitude } = res.coords
        console.log(longitude, latitude)

        let options = {

        }

        // axios.get(`https://api.darksky.net/forecast/c8b74294a0fcccb14561085768e43bfc/${latitude},${longitude}`,
        //   {
        //     headers: {
        //       'Content-Type': 'application/json; charset=utf-8',
        //       'Access-Control-Allow-Origin': 'no-cors'
        //     }
        //   })
        //   .then(res => console.log(res))

        // fetch(`https://api.darksky.net/forecast/c8b74294a0fcccb14561085768e43bfc/${latitude},${longitude}`, {
        //   mode: 'no-cors',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Content-Encoding': 'gzip'
        //   },
        //   redirect: 'follow'
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))
        //   .catch(error => console.log('error', error))
    })

    // this.forecast = await this.FS.getForecast(coords)

  }

}
