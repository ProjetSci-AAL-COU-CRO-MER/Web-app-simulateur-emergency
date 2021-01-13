import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ 
    providedIn: 'root'
})

export class ConfigMapService {

  constructor(private http: HttpClient) {}

  public getConfig(): any {
    return this.http.get(`${environment.urlAPI}/config-pos-geo`);
  }

  public getAllConfig(): any {
    return this.http.get(`${environment.urlAPI}/config-pos-geo/all`);
  }

  public newConfig(data) {
    console.log(data);
    return this.http.post(`${environment.urlAPI}/config-pos-geo/new`, data);
  }

  public activConfig(id) {
    return this.http.get(`${environment.urlAPI}/config-pos-geo/active/${id}`);
  }

  public desactivConfig(id) {
    return this.http.get(`${environment.urlAPI}/config-pos-geo/desactive/${id}`);
  }

  public deleteConfig(id): any {
    console.log(id);
    return this.http.get(`${environment.urlAPI}/config-pos-geo/delete/${id}`);
  }

}