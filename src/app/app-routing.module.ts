import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent }      from './heros/heros.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
