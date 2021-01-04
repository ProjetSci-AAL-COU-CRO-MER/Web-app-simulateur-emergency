import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
