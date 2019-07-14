import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatIconModule, MatCardModule, MatDividerModule, MatStepperModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatSlideToggleModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const material: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatStepperModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule
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
