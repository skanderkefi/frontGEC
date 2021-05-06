import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejdouanetndComponent } from './rejdouanetnd.component';

describe('RejdouanetndComponent', () => {
  let component: RejdouanetndComponent;
  let fixture: ComponentFixture<RejdouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejdouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejdouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
