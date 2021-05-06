import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptfisclocdeviseComponent } from './cmptfisclocdevise.component';

describe('CmptfisclocdeviseComponent', () => {
  let component: CmptfisclocdeviseComponent;
  let fixture: ComponentFixture<CmptfisclocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptfisclocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptfisclocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
