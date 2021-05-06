import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordoacadeviseComponent } from './adminbordoacadevise.component';

describe('AdminbordoacadeviseComponent', () => {
  let component: AdminbordoacadeviseComponent;
  let fixture: ComponentFixture<AdminbordoacadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordoacadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordoacadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
