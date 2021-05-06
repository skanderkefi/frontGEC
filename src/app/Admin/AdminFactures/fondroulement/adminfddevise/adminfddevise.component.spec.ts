import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfddeviseComponent } from './adminfddevise.component';

describe('AdminfddeviseComponent', () => {
  let component: AdminfddeviseComponent;
  let fixture: ComponentFixture<AdminfddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
