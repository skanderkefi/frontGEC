import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincertdeviseComponent } from './admincertdevise.component';

describe('AdmincertdeviseComponent', () => {
  let component: AdmincertdeviseComponent;
  let fixture: ComponentFixture<AdmincertdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincertdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincertdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
