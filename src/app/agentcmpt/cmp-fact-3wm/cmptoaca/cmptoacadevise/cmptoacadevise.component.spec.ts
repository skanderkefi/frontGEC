import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptoacadeviseComponent } from './cmptoacadevise.component';

describe('CmptoacadeviseComponent', () => {
  let component: CmptoacadeviseComponent;
  let fixture: ComponentFixture<CmptoacadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptoacadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptoacadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
