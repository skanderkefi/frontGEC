import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordpeadeviseComponent } from './adminbordpeadevise.component';

describe('AdminbordpeadeviseComponent', () => {
  let component: AdminbordpeadeviseComponent;
  let fixture: ComponentFixture<AdminbordpeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordpeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordpeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
