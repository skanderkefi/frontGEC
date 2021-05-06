import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmplctndComponent } from './cmplctnd.component';

describe('CmplctndComponent', () => {
  let component: CmplctndComponent;
  let fixture: ComponentFixture<CmplctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmplctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmplctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
