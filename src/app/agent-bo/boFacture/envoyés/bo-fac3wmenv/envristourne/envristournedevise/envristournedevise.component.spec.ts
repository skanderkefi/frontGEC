import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvristournedeviseComponent } from './envristournedevise.component';

describe('EnvristournedeviseComponent', () => {
  let component: EnvristournedeviseComponent;
  let fixture: ComponentFixture<EnvristournedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvristournedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvristournedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
