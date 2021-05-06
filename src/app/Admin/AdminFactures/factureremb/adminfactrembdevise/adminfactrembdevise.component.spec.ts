import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfactrembdeviseComponent } from './adminfactrembdevise.component';

describe('AdminfactrembdeviseComponent', () => {
  let component: AdminfactrembdeviseComponent;
  let fixture: ComponentFixture<AdminfactrembdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfactrembdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfactrembdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
