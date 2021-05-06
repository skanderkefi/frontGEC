import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordancedeviseComponent } from './adminbordancedevise.component';

describe('AdminbordancedeviseComponent', () => {
  let component: AdminbordancedeviseComponent;
  let fixture: ComponentFixture<AdminbordancedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordancedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordancedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
