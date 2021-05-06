import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptdouanedeviseComponent } from './cmptdouanedevise.component';

describe('CmptdouanedeviseComponent', () => {
  let component: CmptdouanedeviseComponent;
  let fixture: ComponentFixture<CmptdouanedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptdouanedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptdouanedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
