import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresostegdeviseComponent } from './tresostegdevise.component';

describe('TresostegdeviseComponent', () => {
  let component: TresostegdeviseComponent;
  let fixture: ComponentFixture<TresostegdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresostegdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresostegdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
