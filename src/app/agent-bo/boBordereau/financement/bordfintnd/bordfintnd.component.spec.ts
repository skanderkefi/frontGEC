import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordfintndComponent } from './bordfintnd.component';

describe('BordfintndComponent', () => {
  let component: BordfintndComponent;
  let fixture: ComponentFixture<BordfintndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordfintndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordfintndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
