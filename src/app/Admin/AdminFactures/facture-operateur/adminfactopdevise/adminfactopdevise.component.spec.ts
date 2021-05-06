import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfactopdeviseComponent } from './adminfactopdevise.component';

describe('AdminfactopdeviseComponent', () => {
  let component: AdminfactopdeviseComponent;
  let fixture: ComponentFixture<AdminfactopdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfactopdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfactopdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
