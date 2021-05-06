import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvjetprestndComponent } from './envjetprestnd.component';

describe('EnvjetprestndComponent', () => {
  let component: EnvjetprestndComponent;
  let fixture: ComponentFixture<EnvjetprestndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvjetprestndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvjetprestndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
