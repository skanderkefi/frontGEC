import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejristdeviseComponent } from './rejristdevise.component';

describe('RejristdeviseComponent', () => {
  let component: RejristdeviseComponent;
  let fixture: ComponentFixture<RejristdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejristdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejristdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
