import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvfdtndComponent } from './envfdtnd.component';

describe('EnvfdtndComponent', () => {
  let component: EnvfdtndComponent;
  let fixture: ComponentFixture<EnvfdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvfdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvfdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
