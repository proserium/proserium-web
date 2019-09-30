/*
 * service-add.component.spec.ts
 *
 * Copyright by proserium, all rights reserved.
 * MIT License: https://mit-license.org
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddComponent } from './service-add.component';

describe('ServiceAddComponent', () => {
  let component: ServiceAddComponent;
  let fixture: ComponentFixture<ServiceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
