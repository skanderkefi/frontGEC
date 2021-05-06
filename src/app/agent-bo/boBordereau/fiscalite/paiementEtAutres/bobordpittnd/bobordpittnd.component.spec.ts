import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordpeatndComponent } from './bobordpittnd.component';

describe('BobordpeatndComponent', () => {
  let component: BobordpeatndComponent;
  let fixture: ComponentFixture<BobordpeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordpeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordpeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
