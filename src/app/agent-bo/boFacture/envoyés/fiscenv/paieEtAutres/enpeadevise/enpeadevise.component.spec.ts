import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnpeadeviseComponent } from './enpeadevise.component';

describe('EnpeadeviseComponent', () => {
  let component: EnpeadeviseComponent;
  let fixture: ComponentFixture<EnpeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnpeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnpeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
