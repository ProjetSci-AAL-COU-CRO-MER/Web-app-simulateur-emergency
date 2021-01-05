import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.router.navigate(['login'])
  }

}
