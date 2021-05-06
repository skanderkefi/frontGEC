import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordfisctndComponent } from './adminbordfisctnd.component';

describe('AdminbordfisctndComponent', () => {
  let component: AdminbordfisctndComponent;
  let fixture: ComponentFixture<AdminbordfisctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordfisctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordfisctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
