import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements OnInit {
  
  menuItems = [
    {
      libelle: 'MAP',
      link: '/map-simulator'
    }, {
      libelle: 'DECONNEXION',
      link: 'login'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
