import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvdouanetndComponent } from './envdouanetnd.component';

describe('EnvdouanetndComponent', () => {
  let component: EnvdouanetndComponent;
  let fixture: ComponentFixture<EnvdouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvdouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvdouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
