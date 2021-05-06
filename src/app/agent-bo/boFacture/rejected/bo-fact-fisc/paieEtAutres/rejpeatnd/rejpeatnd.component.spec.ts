import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejpeatndComponent } from './rejpeatnd.component';

describe('RejpeatndComponent', () => {
  let component: RejpeatndComponent;
  let fixture: ComponentFixture<RejpeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejpeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejpeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
