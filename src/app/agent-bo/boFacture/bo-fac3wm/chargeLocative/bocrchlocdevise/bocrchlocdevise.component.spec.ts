import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BocrchlocdeviseComponent } from './bocrchlocdevise.component';

describe('BocrchlocdeviseComponent', () => {
  let component: BocrchlocdeviseComponent;
  let fixture: ComponentFixture<BocrchlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocrchlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BocrchlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
