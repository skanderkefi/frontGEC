import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptdouanetndComponent } from './cmptdouanetnd.component';

describe('CmptdouanetndComponent', () => {
  let component: CmptdouanetndComponent;
  let fixture: ComponentFixture<CmptdouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptdouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptdouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
