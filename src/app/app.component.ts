import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-map';
  latitude = 40.4045067;
  longitude = 49.8724673;
  onChosenLocation = false;

  onChooseLocation(event){
    this.onChosenLocation = true;
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}
