import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordsotdeviseComponent } from './adminbordsotdevise.component';

describe('AdminbordsotdeviseComponent', () => {
  let component: AdminbordsotdeviseComponent;
  let fixture: ComponentFixture<AdminbordsotdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordsotdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordsotdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
