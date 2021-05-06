import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpoptndComponent } from './cmpoptnd.component';

describe('CmpoptndComponent', () => {
  let component: CmpoptndComponent;
  let fixture: ComponentFixture<CmpoptndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpoptndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpoptndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
