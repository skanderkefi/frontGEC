import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordjetprestndComponent } from './adminbordjetprestnd.component';

describe('AdminbordjetprestndComponent', () => {
  let component: AdminbordjetprestndComponent;
  let fixture: ComponentFixture<AdminbordjetprestndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordjetprestndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordjetprestndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
