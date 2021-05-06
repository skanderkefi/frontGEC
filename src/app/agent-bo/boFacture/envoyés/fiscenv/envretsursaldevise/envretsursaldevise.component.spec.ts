import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvretsursaldeviseComponent } from './envretsursaldevise.component';

describe('EnvretsursaldeviseComponent', () => {
  let component: EnvretsursaldeviseComponent;
  let fixture: ComponentFixture<EnvretsursaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvretsursaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvretsursaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
