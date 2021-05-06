import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpitdeviseComponent } from './adminpitdevise.component';

describe('AdminpitdeviseComponent', () => {
  let component: AdminpitdeviseComponent;
  let fixture: ComponentFixture<AdminpitdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpitdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpitdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
