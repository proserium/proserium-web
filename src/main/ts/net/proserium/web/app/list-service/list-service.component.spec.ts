/*
 * list-service.component.spec.ts
 *
 * Copyright by proserium, all rights reserved.
 * MIT License: https://mit-license.org
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceComponent } from './list-service.component';

describe('ListServiceComponent', () => {
  let component: ListServiceComponent;
  let fixture: ComponentFixture<ListServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
