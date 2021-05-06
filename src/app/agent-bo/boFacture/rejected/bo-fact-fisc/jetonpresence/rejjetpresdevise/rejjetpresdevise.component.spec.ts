import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejjetpresdeviseComponent } from './rejjetpresdevise.component';

describe('RejjetpresdeviseComponent', () => {
  let component: RejjetpresdeviseComponent;
  let fixture: ComponentFixture<RejjetpresdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejjetpresdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejjetpresdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
