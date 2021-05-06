import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlctndComponent } from './adminlctnd.component';

describe('AdminlctndComponent', () => {
  let component: AdminlctndComponent;
  let fixture: ComponentFixture<AdminlctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
