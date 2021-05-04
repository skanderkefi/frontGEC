import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordereauventdirectComponent } from './bordereauventdirect.component';

describe('BordereauventdirectComponent', () => {
  let component: BordereauventdirectComponent;
  let fixture: ComponentFixture<BordereauventdirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordereauventdirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordereauventdirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
