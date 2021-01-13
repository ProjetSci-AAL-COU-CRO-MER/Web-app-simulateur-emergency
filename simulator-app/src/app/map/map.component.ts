import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../service/incident.service';
import { ConfigMapService } from '../../service/config-map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public filter = {
    incident: true,
    etablissement: false,
    vehicule: false,
  }
  public map;
  public markers = {
    incident: null
  };

  constructor( private incidentService: IncidentService, private configService: ConfigMapService ) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(el => {
      this.map = L.map('mapid').setView([el.latitude, el.longitude], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.markers = {
        incident: L.layerGroup().addTo(this.map)
      }
    });
    this.display();
  }

  public changeData(element, value) {
    this.filter[element] = !value;
    this.display();
  }

  public display() {
    for (let el in this.filter) {
      if (this.filter[el]) {
        this.getList(el);
      } else {
        this.markers[el].clearLayers()
      }
    }
  }

  private getList(element) {
    switch(element) {
      case 'incident':
        this.incidentService.getList().subscribe(data => {
          if (data) {
            data.forEach(el => {
              let popup = `<b>Intensité </b>:${el.intensite}<br><br><b>Latitude</b> : ${el.latitude}<br><b>Longitude</b> : ${el.longitude}`
              this.markers.incident.addLayer(L.marker([el.latitude, el.longitude], {icon: L.icon({iconUrl: '../../assets/icon/fire.png'})}).bindPopup(popup).addTo(this.map));
            });
          }
        });
        break;
    }
  }
}
