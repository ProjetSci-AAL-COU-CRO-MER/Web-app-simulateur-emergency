import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';


import { UtilisateurService } from '../../service/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password = '';
  public passError = false;

  constructor(private router: Router, private utilisateurService: UtilisateurService) { }

  async ngOnInit() {
  }

  async login() {
    const salt = "lama";
    console.log(this.password);
    const dataToSend = {
      passwordHached: sha256(this.password+salt)
    };
    await this.utilisateurService.login(dataToSend).subscribe(el => {
      if (el.pass) {
        localStorage.setItem('token', el.token);
        this.router.navigate(['map-emergency'])
      } else {
        this.passError = true;
      }
    });
  }

}
