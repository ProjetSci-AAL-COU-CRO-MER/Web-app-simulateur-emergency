import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilisateurService } from '../../service/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private utilisateurService: UtilisateurService) { }

  async ngOnInit() {
    await this.utilisateurService.getInstance().subscribe(el => {
      console.log(el);
    });
  }

  login(): void {
    this.router.navigate(['map-emergency'])
  }

}
