import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './parent/land/land.component';
import { SteptwoComponent } from './steptwo/steptwo.component';
import { StepthreeComponent } from './stepthree/stepthree.component';


const routes: Routes = [
  {path: 'twolanding', component: SteptwoComponent},
  {path: 'threelanding', component: StepthreeComponent},
  {path: 'landing', component: LandComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
