import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminretsaldeviseComponent } from './adminretsaldevise.component';

describe('AdminretsaldeviseComponent', () => {
  let component: AdminretsaldeviseComponent;
  let fixture: ComponentFixture<AdminretsaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminretsaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminretsaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
