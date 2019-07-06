import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'l', component: ListComponent},
  { path: 's/:sid', component: ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
