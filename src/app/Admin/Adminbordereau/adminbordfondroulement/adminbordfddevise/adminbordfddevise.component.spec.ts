import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordfddeviseComponent } from './adminbordfddevise.component';

describe('AdminbordfddeviseComponent', () => {
  let component: AdminbordfddeviseComponent;
  let fixture: ComponentFixture<AdminbordfddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordfddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordfddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
