import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainUiComponent } from './main-ui/main-ui.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path:'',
    component: MainUiComponent,
    children: [{
      path: 'map-simulator',
      component: MapComponent
    }]
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
