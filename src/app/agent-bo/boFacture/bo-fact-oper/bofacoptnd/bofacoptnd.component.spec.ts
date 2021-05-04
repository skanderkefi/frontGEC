import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacoptndComponent } from './bofacoptnd.component';

describe('BofacoptndComponent', () => {
  let component: BofacoptndComponent;
  let fixture: ComponentFixture<BofacoptndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacoptndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacoptndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
