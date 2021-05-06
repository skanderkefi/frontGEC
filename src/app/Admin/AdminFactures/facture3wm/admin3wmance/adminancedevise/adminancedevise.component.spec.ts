import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminancedeviseComponent } from './adminancedevise.component';

describe('AdminancedeviseComponent', () => {
  let component: AdminancedeviseComponent;
  let fixture: ComponentFixture<AdminancedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminancedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminancedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
