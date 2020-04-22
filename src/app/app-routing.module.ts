import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'slider/:slideID', component: SliderComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
