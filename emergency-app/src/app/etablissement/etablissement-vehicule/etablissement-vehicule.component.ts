import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtablissementService } from 'src/service/etablissement.service';
import { VehiculeService } from 'src/service/vehicule.service';

@Component({
  selector: 'app-etablissement-vehicule',
  templateUrl: './etablissement-vehicule.component.html',
  styleUrls: ['./etablissement-vehicule.component.css']
})
export class EtablissementVehiculeComponent implements OnInit {

  public listVehicule = [];
  private idEtablissement = null;
  public deletedVehiculeId = null;
  public newVehiculeData: any = {}
  public listTypeVehicule: any = [];
  private etablissement:any = {};

  constructor(private route: ActivatedRoute, private VehiculeService: VehiculeService, private EtablissementService: EtablissementService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.route.params.subscribe(params => {
      this.idEtablissement = params['id'];
    })

    await this.EtablissementService.getOne(this.idEtablissement).subscribe(data => {
      this.etablissement = data;
    });

    await this.VehiculeService.getListVehiculeEtablissement(this.idEtablissement).subscribe(data => {
      this.listVehicule = data;
    })
    await this.VehiculeService.getListTypeVehicule().subscribe(data => {
      this.listTypeVehicule = data;
    });
  }

  public addVehicule() {
    const dataToSend = {
      nom: this.newVehiculeData.nom,
      longitude: this.etablissement.longitude,
      latitude: this.etablissement.latitude,
      id_etablissement: this.etablissement.id,
      id_vehicule_type: this.newVehiculeData.id_vehicule_type
    }
    this.VehiculeService.newVehicule(dataToSend).subscribe(el => {
      this.newVehiculeData = {};
      this.loadData();
    });
  }

  public deleteVehicule(id) {
    this.VehiculeService.deleteVehicule(id).subscribe(el => {
      this.loadData();
    });
  }

}
