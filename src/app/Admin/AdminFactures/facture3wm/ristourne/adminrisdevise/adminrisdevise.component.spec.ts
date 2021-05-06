import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrisdeviseComponent } from './adminrisdevise.component';

describe('AdminrisdeviseComponent', () => {
  let component: AdminrisdeviseComponent;
  let fixture: ComponentFixture<AdminrisdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrisdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrisdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
