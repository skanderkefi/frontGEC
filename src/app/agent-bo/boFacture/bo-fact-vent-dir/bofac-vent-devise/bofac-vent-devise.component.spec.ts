import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacVentDeviseComponent } from './bofac-vent-devise.component';

describe('BofacVentDeviseComponent', () => {
  let component: BofacVentDeviseComponent;
  let fixture: ComponentFixture<BofacVentDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacVentDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacVentDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
