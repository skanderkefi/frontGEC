import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvpittxtndComponent } from './envpittxtnd.component';

describe('EnvpittxtndComponent', () => {
  let component: EnvpittxtndComponent;
  let fixture: ComponentFixture<EnvpittxtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvpittxtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvpittxtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
