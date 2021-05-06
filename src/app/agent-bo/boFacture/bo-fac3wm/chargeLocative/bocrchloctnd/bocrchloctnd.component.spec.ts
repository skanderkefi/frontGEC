import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BocrchloctndComponent } from './bocrchloctnd.component';

describe('BocrchloctndComponent', () => {
  let component: BocrchloctndComponent;
  let fixture: ComponentFixture<BocrchloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocrchloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BocrchloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
