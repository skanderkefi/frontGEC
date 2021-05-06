import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvretsursaltndComponent } from './envretsursaltnd.component';

describe('EnvretsursaltndComponent', () => {
  let component: EnvretsursaltndComponent;
  let fixture: ComponentFixture<EnvretsursaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvretsursaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvretsursaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
