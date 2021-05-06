import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpeadeviseComponent } from './adminpeadevise.component';

describe('AdminpeadeviseComponent', () => {
  let component: AdminpeadeviseComponent;
  let fixture: ComponentFixture<AdminpeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
