import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlcdeviseComponent } from './adminlcdevise.component';

describe('AdminlcdeviseComponent', () => {
  let component: AdminlcdeviseComponent;
  let fixture: ComponentFixture<AdminlcdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlcdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlcdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
