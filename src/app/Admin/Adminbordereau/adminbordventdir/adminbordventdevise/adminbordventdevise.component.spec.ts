import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordventdeviseComponent } from './adminbordventdevise.component';

describe('AdminbordventdeviseComponent', () => {
  let component: AdminbordventdeviseComponent;
  let fixture: ComponentFixture<AdminbordventdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordventdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordventdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
