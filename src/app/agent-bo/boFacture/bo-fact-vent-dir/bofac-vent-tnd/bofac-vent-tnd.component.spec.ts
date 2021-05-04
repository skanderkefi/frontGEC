import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacVentTndComponent } from './bofac-vent-tnd.component';

describe('BofacVentTndComponent', () => {
  let component: BofacVentTndComponent;
  let fixture: ComponentFixture<BofacVentTndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacVentTndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacVentTndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
