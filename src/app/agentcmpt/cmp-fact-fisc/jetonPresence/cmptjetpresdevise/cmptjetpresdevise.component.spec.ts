import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptjetpresdeviseComponent } from './cmptjetpresdevise.component';

describe('CmptjetpresdeviseComponent', () => {
  let component: CmptjetpresdeviseComponent;
  let fixture: ComponentFixture<CmptjetpresdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptjetpresdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptjetpresdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
