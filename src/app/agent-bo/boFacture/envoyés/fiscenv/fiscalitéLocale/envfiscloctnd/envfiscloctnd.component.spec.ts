import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvfiscloctndComponent } from './envfiscloctnd.component';

describe('EnvfiscloctndComponent', () => {
  let component: EnvfiscloctndComponent;
  let fixture: ComponentFixture<EnvfiscloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvfiscloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvfiscloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
