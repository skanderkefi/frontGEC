import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedfdtndComponent } from './rejectedfdtnd.component';

describe('RejectedfdtndComponent', () => {
  let component: RejectedfdtndComponent;
  let fixture: ComponentFixture<RejectedfdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedfdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedfdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
