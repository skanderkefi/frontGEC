import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfactlcdeviseComponent } from './adminfactlcdevise.component';

describe('AdminfactlcdeviseComponent', () => {
  let component: AdminfactlcdeviseComponent;
  let fixture: ComponentFixture<AdminfactlcdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfactlcdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfactlcdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
