import { Component, OnInit } from '@angular/core';
import { ConfigMapService } from '../../service/config-map.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  listConfig = [];
  newData: any = {};

  constructor(private ConfService: ConfigMapService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.ConfService.getAllConfig().subscribe(data => {
      this.listConfig = data;
    })
  }

  addConfig(): void {
    this.ConfService.newConfig(this.newData).subscribe(el => {
      console.log(el);
    });
    this.newData = {};
    this.loadData();
  }

  activeOneConfig(id) {
    const configActifId = this.listConfig.find(el => el.b_actif == true)['id'];
    this.ConfService.desactivConfig(configActifId).subscribe(el => {
      this.ConfService.activConfig(id).subscribe(el => {
        this.loadData();
      });
    });
  }

  deleteConfig(id) {
    console.log(id);
    this.ConfService.deleteConfig(id).subscribe(el => {
      this.loadData();
    });
  }

}
