import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ 
    providedIn: 'root'
})

export class EtablissementService {

  constructor(private http: HttpClient) {}

  public getList(): any {
    return this.http.get(`${environment.urlAPI}/etablissement/list`);
  }

  public getOne(id): any {
    return this.http.get(`${environment.urlAPI}/etablissement/one/${id}`);
  }

  public getEtablissementTypeList(): any {
    return this.http.get(`${environment.urlAPI}/etablissement/type/list`);
  }
  
  public newEtablissement(data): any {
    return this.http.post(`${environment.urlAPI}/etablissement/new`, data);
  }

  public deleteEtablissement(id): any {
    return this.http.get(`${environment.urlAPI}/etablissement/delete/${id}`);
  }

 
}
