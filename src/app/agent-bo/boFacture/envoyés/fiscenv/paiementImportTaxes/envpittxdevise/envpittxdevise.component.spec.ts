import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvpittxdeviseComponent } from './envpittxdevise.component';

describe('EnvpittxdeviseComponent', () => {
  let component: EnvpittxdeviseComponent;
  let fixture: ComponentFixture<EnvpittxdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvpittxdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvpittxdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
