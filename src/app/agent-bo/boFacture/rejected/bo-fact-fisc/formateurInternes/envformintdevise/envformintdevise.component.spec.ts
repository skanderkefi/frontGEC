import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvformintdeviseComponent } from './envformintdevise.component';

describe('EnvformintdeviseComponent', () => {
  let component: EnvformintdeviseComponent;
  let fixture: ComponentFixture<EnvformintdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvformintdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvformintdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
