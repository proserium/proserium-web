import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ServiceComponent } from './service/service.component';
import { NodesComponent } from './nodes/nodes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'services', component: ListComponent},
  { path: 'service/:sid', component: ServiceComponent},
  { path: 'nodes', component: NodesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
