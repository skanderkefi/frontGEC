import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordpitdeviseComponent } from './adminbordpitdevise.component';

describe('AdminbordpitdeviseComponent', () => {
  let component: AdminbordpitdeviseComponent;
  let fixture: ComponentFixture<AdminbordpitdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordpitdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordpitdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
