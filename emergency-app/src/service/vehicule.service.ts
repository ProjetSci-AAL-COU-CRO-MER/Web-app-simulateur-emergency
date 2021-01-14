import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ 
    providedIn: 'root'
})

export class VehiculeService {

  constructor(private http: HttpClient) {}

  public getList(): any {
    return this.http.get(`${environment.urlAPI}/vehicule/all`);
  }

  public getListVehiculeEtablissement(idEtablissement): any {
    return this.http.get(`${environment.urlAPI}/vehicule/etablissement/${idEtablissement}`);
  }

  public getListTypeVehicule(): any {
    return this.http.get(`${environment.urlAPI}/vehicule/type/all`);
  }

  public newVehicule(data): any {
    return this.http.post(`${environment.urlAPI}/vehicule/new`, data);
  }

  public deleteVehicule(id): any {
    return this.http.get(`${environment.urlAPI}/vehicule/delete/${id}`);
  }

}
