import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdouanetndComponent } from './crdouanetnd.component';

describe('CrdouanetndComponent', () => {
  let component: CrdouanetndComponent;
  let fixture: ComponentFixture<CrdouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrdouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
