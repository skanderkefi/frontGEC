import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoacatndComponent } from './rejoacatnd.component';

describe('RejoacatndComponent', () => {
  let component: RejoacatndComponent;
  let fixture: ComponentFixture<RejoacatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejoacatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoacatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
