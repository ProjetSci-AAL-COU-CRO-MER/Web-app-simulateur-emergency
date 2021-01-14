import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainUiComponent } from './main-ui/main-ui.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config.component';
import { EtablissementListComponent } from './etablissement/etablissement-list/etablissement-list.component';
import { EtablissementMainComponent } from './etablissement/etablissement-main/etablissement-main.component';
import { EtablissementVehiculeComponent } from './etablissement/etablissement-vehicule/etablissement-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    MainUiComponent,
    MapComponent,
    LoginComponent,
    ConfigComponent,
    EtablissementListComponent,
    EtablissementMainComponent,
    EtablissementVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
