import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpfintndComponent } from './cmpfintnd.component';

describe('CmpfintndComponent', () => {
  let component: CmpfintndComponent;
  let fixture: ComponentFixture<CmpfintndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpfintndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpfintndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
