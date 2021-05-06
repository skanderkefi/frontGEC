import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfisclocdeviseComponent } from './adminfisclocdevise.component';

describe('AdminfisclocdeviseComponent', () => {
  let component: AdminfisclocdeviseComponent;
  let fixture: ComponentFixture<AdminfisclocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfisclocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfisclocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
