import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordretsaldeviseComponent } from './adminbordretsaldevise.component';

describe('AdminbordretsaldeviseComponent', () => {
  let component: AdminbordretsaldeviseComponent;
  let fixture: ComponentFixture<AdminbordretsaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordretsaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordretsaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
