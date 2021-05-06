import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorddouanetndComponent } from './borddouanetnd.component';

describe('BorddouanetndComponent', () => {
  let component: BorddouanetndComponent;
  let fixture: ComponentFixture<BorddouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorddouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorddouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
