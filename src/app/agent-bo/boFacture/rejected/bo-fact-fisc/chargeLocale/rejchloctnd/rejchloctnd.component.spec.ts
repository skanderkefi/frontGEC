import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejchloctndComponent } from './rejchloctnd.component';

describe('RejchloctndComponent', () => {
  let component: RejchloctndComponent;
  let fixture: ComponentFixture<RejchloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejchloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejchloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
