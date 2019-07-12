import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ListNodeComponent } from './list-node/list-node.component';
import { NodeDetailsComponent } from './node-details/node-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServiceComponent,
    ListServiceComponent,
    ListNodeComponent,
    NodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
