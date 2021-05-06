import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptpitdeviseComponent } from './cmptpitdevise.component';

describe('CmptpitdeviseComponent', () => {
  let component: CmptpitdeviseComponent;
  let fixture: ComponentFixture<CmptpitdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptpitdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptpitdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
