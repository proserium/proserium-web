import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNodeComponent } from './list-node.component';

describe('ListNodeComponent', () => {
  let component: ListNodeComponent;
  let fixture: ComponentFixture<ListNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
