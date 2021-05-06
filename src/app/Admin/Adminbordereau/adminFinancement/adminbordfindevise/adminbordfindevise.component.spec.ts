import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordfindeviseComponent } from './adminbordfindevise.component';

describe('AdminbordfindeviseComponent', () => {
  let component: AdminbordfindeviseComponent;
  let fixture: ComponentFixture<AdminbordfindeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordfindeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordfindeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
