import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ListNodeComponent } from './list-node/list-node.component';
import { NodeDetailsComponent } from './node-details/node-details.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'services', component: ListServiceComponent},
  { path: 'service/:sid', component: ServiceComponent},
  { path: 'nodes', component: ListNodeComponent},
  { path: 'node/:nid', component: NodeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
