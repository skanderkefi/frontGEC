import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmprembdeviseComponent } from './cmprembdevise.component';

describe('CmprembdeviseComponent', () => {
  let component: CmprembdeviseComponent;
  let fixture: ComponentFixture<CmprembdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmprembdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmprembdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
