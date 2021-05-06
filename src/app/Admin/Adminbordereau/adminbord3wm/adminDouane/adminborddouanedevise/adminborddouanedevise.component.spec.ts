import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminborddouanedeviseComponent } from './adminborddouanedevise.component';

describe('AdminborddouanedeviseComponent', () => {
  let component: AdminborddouanedeviseComponent;
  let fixture: ComponentFixture<AdminborddouanedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminborddouanedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminborddouanedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
