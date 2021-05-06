import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmplcdeviseComponent } from './cmplcdevise.component';

describe('CmplcdeviseComponent', () => {
  let component: CmplcdeviseComponent;
  let fixture: ComponentFixture<CmplcdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmplcdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmplcdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
