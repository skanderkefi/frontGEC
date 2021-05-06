import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejformindeviseComponent } from './rejformindevise.component';

describe('RejformindeviseComponent', () => {
  let component: RejformindeviseComponent;
  let fixture: ComponentFixture<RejformindeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejformindeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejformindeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
