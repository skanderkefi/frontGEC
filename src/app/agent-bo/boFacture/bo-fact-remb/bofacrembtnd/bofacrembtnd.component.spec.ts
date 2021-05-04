import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacrembtndComponent } from './bofacrembtnd.component';

describe('BofacrembtndComponent', () => {
  let component: BofacrembtndComponent;
  let fixture: ComponentFixture<BofacrembtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacrembtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacrembtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
