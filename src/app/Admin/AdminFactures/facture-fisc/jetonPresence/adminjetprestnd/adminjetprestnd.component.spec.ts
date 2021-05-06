import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminjetprestndComponent } from './adminjetprestnd.component';

describe('AdminjetprestndComponent', () => {
  let component: AdminjetprestndComponent;
  let fixture: ComponentFixture<AdminjetprestndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminjetprestndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminjetprestndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
