import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { EtablissementListComponent } from './etablissement/etablissement-list/etablissement-list.component';
import { EtablissementMainComponent } from './etablissement/etablissement-main/etablissement-main.component';
import { LoginComponent } from './login/login.component';
import { MainUiComponent } from './main-ui/main-ui.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path:'',
    component: MainUiComponent,
    children: 
    [{
      path: 'map-emergency',
      component: MapComponent
    },{
      path: 'etablissement-list',
      component: EtablissementListComponent
    },{
      path: 'etablissement/:id',
      component: EtablissementMainComponent
    },{
      path: 'config',
      component: ConfigComponent
    }
  ]
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
