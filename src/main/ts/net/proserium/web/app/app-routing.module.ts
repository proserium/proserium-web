import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ListNodeComponent } from './list-node/list-node.component';
import { NodeDetailsComponent } from './node-details/node-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceAddComponent } from './service-add/service-add.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'services', component: ListServiceComponent},
  { path: 'service/:sid', component: ServiceDetailsComponent},
  { path: 'nodes', component: ListNodeComponent},
  { path: 'node/:nid', component: NodeDetailsComponent},
  { path: 'add', component: ServiceAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
