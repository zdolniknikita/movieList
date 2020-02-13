import { Component, OnInit } from '@angular/core';
import { ForecastServiceService } from '../../services/forecast-service.service'


@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  forecast: object
  loaded: boolean
  constructor(private FS: ForecastServiceService) {
    this.loaded = false
   }


  async ngOnInit() {
    const coords = await navigator.geolocation.getCurrentPosition(async res => {
      const { longitude, latitude } = res.coords

      if(longitude && latitude) {

        console.log(longitude, latitude);

        this.forecast = await this.FS.getForecast({ latitude, longitude })
        if (this.forecast) this.loaded = true
        console.log(this.forecast)
      }
      })


}
}
