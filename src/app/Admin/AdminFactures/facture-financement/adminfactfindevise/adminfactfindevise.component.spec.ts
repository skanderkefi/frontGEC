import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfactfindeviseComponent } from './adminfactfindevise.component';

describe('AdminfactfindeviseComponent', () => {
  let component: AdminfactfindeviseComponent;
  let fixture: ComponentFixture<AdminfactfindeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfactfindeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfactfindeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
