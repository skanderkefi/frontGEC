import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptformintdeviseComponent } from './cmptformintdevise.component';

describe('CmptformintdeviseComponent', () => {
  let component: CmptformintdeviseComponent;
  let fixture: ComponentFixture<CmptformintdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptformintdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptformintdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
