import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminformintdeviseComponent } from './adminformintdevise.component';

describe('AdminformintdeviseComponent', () => {
  let component: AdminformintdeviseComponent;
  let fixture: ComponentFixture<AdminformintdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminformintdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminformintdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
