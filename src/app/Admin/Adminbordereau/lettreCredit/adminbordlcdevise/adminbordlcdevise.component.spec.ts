import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordlcdeviseComponent } from './adminbordlcdevise.component';

describe('AdminbordlcdeviseComponent', () => {
  let component: AdminbordlcdeviseComponent;
  let fixture: ComponentFixture<AdminbordlcdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordlcdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordlcdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
