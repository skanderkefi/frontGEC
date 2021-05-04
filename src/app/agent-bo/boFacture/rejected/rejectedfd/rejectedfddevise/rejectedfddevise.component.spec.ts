import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedfddeviseComponent } from './rejectedfddevise.component';

describe('RejectedfddeviseComponent', () => {
  let component: RejectedfddeviseComponent;
  let fixture: ComponentFixture<RejectedfddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedfddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedfddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
