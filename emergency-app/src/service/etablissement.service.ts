import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ 
    providedIn: 'root'
})

export class EtablissementService {

  constructor(private http: HttpClient) {}

  public getList(): any {
    return this.http.get(`${environment.urlAPI}/etablissement/all`);
  }

}
