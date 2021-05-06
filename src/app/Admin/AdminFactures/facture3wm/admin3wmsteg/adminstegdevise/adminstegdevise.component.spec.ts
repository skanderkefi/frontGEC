import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstegdeviseComponent } from './adminstegdevise.component';

describe('AdminstegdeviseComponent', () => {
  let component: AdminstegdeviseComponent;
  let fixture: ComponentFixture<AdminstegdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstegdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstegdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
