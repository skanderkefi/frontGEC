import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfactcomddeviseComponent } from './adminfactcomddevise.component';

describe('AdminfactcomddeviseComponent', () => {
  let component: AdminfactcomddeviseComponent;
  let fixture: ComponentFixture<AdminfactcomddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfactcomddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfactcomddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
