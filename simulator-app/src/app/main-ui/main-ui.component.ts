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
    },{
      libelle: 'PARAMÈTRE',
      link: '/config'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login']);
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
