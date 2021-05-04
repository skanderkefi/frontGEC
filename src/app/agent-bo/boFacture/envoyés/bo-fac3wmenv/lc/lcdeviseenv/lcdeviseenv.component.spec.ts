import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdeviseenvComponent } from './lcdeviseenv.component';

describe('LcdeviseenvComponent', () => {
  let component: LcdeviseenvComponent;
  let fixture: ComponentFixture<LcdeviseenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdeviseenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdeviseenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
