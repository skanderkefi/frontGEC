import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmprembtndComponent } from './cmprembtnd.component';

describe('CmprembtndComponent', () => {
  let component: CmprembtndComponent;
  let fixture: ComponentFixture<CmprembtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmprembtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmprembtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
