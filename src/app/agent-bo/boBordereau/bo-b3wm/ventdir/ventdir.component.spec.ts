import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentdirComponent } from './ventdir.component';

describe('VentdirComponent', () => {
  let component: VentdirComponent;
  let fixture: ComponentFixture<VentdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
