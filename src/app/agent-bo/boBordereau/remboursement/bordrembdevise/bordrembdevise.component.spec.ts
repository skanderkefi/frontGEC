import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordrembdeviseComponent } from './bordrembdevise.component';

describe('BordrembdeviseComponent', () => {
  let component: BordrembdeviseComponent;
  let fixture: ComponentFixture<BordrembdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordrembdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordrembdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
