import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvjetpresdeviseComponent } from './envjetpresdevise.component';

describe('EnvjetpresdeviseComponent', () => {
  let component: EnvjetpresdeviseComponent;
  let fixture: ComponentFixture<EnvjetpresdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvjetpresdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvjetpresdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
