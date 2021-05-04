import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacfintndComponent } from './bofacfintnd.component';

describe('BofacfintndComponent', () => {
  let component: BofacfintndComponent;
  let fixture: ComponentFixture<BofacfintndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacfintndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacfintndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
