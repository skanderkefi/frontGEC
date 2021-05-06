import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordfiscdeviseComponent } from './adminbordfiscdevise.component';

describe('AdminbordfiscdeviseComponent', () => {
  let component: AdminbordfiscdeviseComponent;
  let fixture: ComponentFixture<AdminbordfiscdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordfiscdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordfiscdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
