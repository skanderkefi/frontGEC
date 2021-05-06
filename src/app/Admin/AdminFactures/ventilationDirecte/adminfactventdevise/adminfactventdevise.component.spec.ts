import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfactventdeviseComponent } from './adminfactventdevise.component';

describe('AdminfactventdeviseComponent', () => {
  let component: AdminfactventdeviseComponent;
  let fixture: ComponentFixture<AdminfactventdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfactventdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfactventdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
