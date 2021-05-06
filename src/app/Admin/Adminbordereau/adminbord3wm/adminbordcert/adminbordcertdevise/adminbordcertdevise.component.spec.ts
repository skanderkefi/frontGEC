import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordcertdeviseComponent } from './adminbordcertdevise.component';

describe('AdminbordcertdeviseComponent', () => {
  let component: AdminbordcertdeviseComponent;
  let fixture: ComponentFixture<AdminbordcertdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordcertdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordcertdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
