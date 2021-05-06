import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordjetpresdeviseComponent } from './adminbordjetpresdevise.component';

describe('AdminbordjetpresdeviseComponent', () => {
  let component: AdminbordjetpresdeviseComponent;
  let fixture: ComponentFixture<AdminbordjetpresdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordjetpresdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordjetpresdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
