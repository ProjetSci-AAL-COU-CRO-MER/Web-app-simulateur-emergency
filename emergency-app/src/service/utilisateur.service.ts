import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ 
    providedIn: 'root'
})

export class UtilisateurService {
  constructor(private http: HttpClient) {}

  public getInstance() {
    return this.http.get(`${environment.urlAPI}/utilisateur/getInstance`);
  }
}
