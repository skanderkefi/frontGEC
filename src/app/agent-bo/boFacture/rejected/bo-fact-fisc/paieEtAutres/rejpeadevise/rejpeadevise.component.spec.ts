import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejpeadeviseComponent } from './rejpeadevise.component';

describe('RejpeadeviseComponent', () => {
  let component: RejpeadeviseComponent;
  let fixture: ComponentFixture<RejpeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejpeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejpeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
