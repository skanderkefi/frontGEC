import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordchlocdeviseComponent } from './adminbordchlocdevise.component';

describe('AdminbordchlocdeviseComponent', () => {
  let component: AdminbordchlocdeviseComponent;
  let fixture: ComponentFixture<AdminbordchlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordchlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordchlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
