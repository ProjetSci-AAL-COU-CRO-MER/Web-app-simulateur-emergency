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

}