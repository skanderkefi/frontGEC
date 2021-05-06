import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptfiscloctndComponent } from './cmptfiscloctnd.component';

describe('CmptfiscloctndComponent', () => {
  let component: CmptfiscloctndComponent;
  let fixture: ComponentFixture<CmptfiscloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptfiscloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptfiscloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
