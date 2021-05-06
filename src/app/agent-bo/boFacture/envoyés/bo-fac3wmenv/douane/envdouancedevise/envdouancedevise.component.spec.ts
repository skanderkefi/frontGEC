import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvdouancedeviseComponent } from './envdouancedevise.component';

describe('EnvdouancedeviseComponent', () => {
  let component: EnvdouancedeviseComponent;
  let fixture: ComponentFixture<EnvdouancedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvdouancedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvdouancedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
