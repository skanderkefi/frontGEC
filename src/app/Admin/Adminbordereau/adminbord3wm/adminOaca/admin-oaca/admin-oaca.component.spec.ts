import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOacaComponent } from './admin-oaca.component';

describe('AdminOacaComponent', () => {
  let component: AdminOacaComponent;
  let fixture: ComponentFixture<AdminOacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
