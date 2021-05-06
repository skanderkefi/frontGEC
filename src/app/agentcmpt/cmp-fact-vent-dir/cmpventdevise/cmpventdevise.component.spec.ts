import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpventdeviseComponent } from './cmpventdevise.component';

describe('CmpventdeviseComponent', () => {
  let component: CmpventdeviseComponent;
  let fixture: ComponentFixture<CmpventdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpventdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpventdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
