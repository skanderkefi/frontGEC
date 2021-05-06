import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvpeatndComponent } from './envpeatnd.component';

describe('EnvpeatndComponent', () => {
  let component: EnvpeatndComponent;
  let fixture: ComponentFixture<EnvpeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvpeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvpeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
