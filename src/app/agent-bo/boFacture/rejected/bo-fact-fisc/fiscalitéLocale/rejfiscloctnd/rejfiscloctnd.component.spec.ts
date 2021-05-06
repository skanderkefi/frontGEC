import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejfiscloctndComponent } from './rejfiscloctnd.component';

describe('RejfiscloctndComponent', () => {
  let component: RejfiscloctndComponent;
  let fixture: ComponentFixture<RejfiscloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejfiscloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejfiscloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
