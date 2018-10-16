import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var L;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     var mymap = L.map('mapid').setView([51.505, -0.09], 13);

     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGV0dW5pYW5ldGEiLCJhIjoiY2pqeWFzZ2I2ODV2cDNxbnpwNzdtaXk0NSJ9.ef0bCwMcuCWxf4ezIaFcsw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGV0dW5pYW5ldGEiLCJhIjoiY2pqeWFzZ2I2ODV2cDNxbnpwNzdtaXk0NSJ9.ef0bCwMcuCWxf4ezIaFcsw'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([-25.951871,28.388672])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
    
    mymap.on('click', onMapClick);

    function onMapClick(e) {
      alert("You clicked the map at " + e.latlng);
  
      var popup = L.popup();
 
      mymap.on('click', onMapClick);

    function onMapClick(e) {
     var popup = L.popup();
     popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
    }

}



}
