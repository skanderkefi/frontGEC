import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoacadeviseComponent } from './adminoacadevise.component';

describe('AdminoacadeviseComponent', () => {
  let component: AdminoacadeviseComponent;
  let fixture: ComponentFixture<AdminoacadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminoacadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminoacadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
