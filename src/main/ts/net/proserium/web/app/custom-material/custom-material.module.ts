import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule } from '@angular/material';

const material: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, material,
  ],
  exports: [
    CommonModule, material,
  ],
})
export class CustomMaterialModule { }
