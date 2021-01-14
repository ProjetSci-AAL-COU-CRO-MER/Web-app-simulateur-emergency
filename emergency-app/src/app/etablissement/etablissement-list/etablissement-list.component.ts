import { Component, OnInit } from '@angular/core';
import { EtablissementService } from 'src/service/etablissement.service';

@Component({
  selector: 'app-etablissement-list',
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.css']
})
export class EtablissementListComponent implements OnInit {

  public listEtablissement = []
  public listTypeEtablissement = []
  public newEtablissementData: any = {};
  public deletedEtablissementId: any = null;

  constructor( private EtablissementService:  EtablissementService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    await this.EtablissementService.getList().subscribe(data => {
      this.listEtablissement = data;
    });
    await this.EtablissementService.getEtablissementTypeList().subscribe(data => {
      this.listTypeEtablissement = data;
    });
  }

  public addEtablissement() {
    this.EtablissementService.newEtablissement(this.newEtablissementData).subscribe(el => {
      this.newEtablissementData = {};
      this.loadData();
    });
  }

  public deleteEtablissement(id) {
    this.EtablissementService.deleteEtablissement(id).subscribe(el => {
      this.loadData();
    });
  }

}
