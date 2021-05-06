import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordcmddeviseComponent } from './adminbordcmddevise.component';

describe('AdminbordcmddeviseComponent', () => {
  let component: AdminbordcmddeviseComponent;
  let fixture: ComponentFixture<AdminbordcmddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordcmddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordcmddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
