import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtablissementService } from 'src/service/etablissement.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-etablissement-main',
  templateUrl: './etablissement-main.component.html',
  styleUrls: ['./etablissement-main.component.css']
})
export class EtablissementMainComponent implements OnInit {

  public loading = true;
  private idEtablissement = null;
  public listTypeEtablissement = [];
  public data: any = {};
  public map;

  constructor(private route: ActivatedRoute, private EtablissementService:  EtablissementService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.route.params.subscribe(params => {
      this.idEtablissement = params['id'];
    })

    await this.EtablissementService.getOne(this.idEtablissement).subscribe(data => {
      this.data = data;
      this.map = L.map('mapid').setView([this.data.latitude, this.data.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      L.marker([this.data.latitude, this.data.longitude], {icon: L.icon({iconUrl: '../../assets/icon/fire-station.png'})}).addTo(this.map);
    });
    await this.EtablissementService.getEtablissementTypeList().subscribe(data => {
      this.listTypeEtablissement = data;
    });
  }

}
