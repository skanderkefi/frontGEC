import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejdouanedeviseComponent } from './rejdouanedevise.component';

describe('RejdouanedeviseComponent', () => {
  let component: RejdouanedeviseComponent;
  let fixture: ComponentFixture<RejdouanedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejdouanedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejdouanedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
