import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements OnInit {

  constructor(private router: Router) { }

  menuItems = [
    {
      libelle: 'MAP',
      link: '/map-emergency'
    }
  ]

  ngOnInit(): void {
  }
  
  logOut(): void {
    this.router.navigate(['login'])
  }

}
