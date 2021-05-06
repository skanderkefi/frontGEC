import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoacatndComponent } from './envoacatnd.component';

describe('EnvoacatndComponent', () => {
  let component: EnvoacatndComponent;
  let fixture: ComponentFixture<EnvoacatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoacatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoacatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
