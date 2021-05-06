import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejretsaltndComponent } from './rejretsaltnd.component';

describe('RejretsaltndComponent', () => {
  let component: RejretsaltndComponent;
  let fixture: ComponentFixture<RejretsaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejretsaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejretsaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
