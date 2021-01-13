import { Component, OnInit } from '@angular/core';
import { ConfigMapService } from '../../service/config-map.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  listConfig = [];

  constructor(private ConfService: ConfigMapService) { }

  ngOnInit(): void {
    this.ConfService.getAllConfig().subscribe(data => {
      this.listConfig = data;
    })
  }

}
