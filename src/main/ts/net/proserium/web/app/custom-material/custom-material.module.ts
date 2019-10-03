/*
 * custom-material.module.ts
 *
 * Copyright by proserium, all rights reserved.
 * MIT License: https://mit-license.org
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material';
import { MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { MatIconModule, MatCardModule, MatDividerModule, MatStepperModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
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
  MatSlideToggleModule,
  MatTooltipModule,
  MatChipsModule
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
