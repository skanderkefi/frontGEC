import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmppeadeviseComponent } from './cmppeadevise.component';

describe('CmppeadeviseComponent', () => {
  let component: CmppeadeviseComponent;
  let fixture: ComponentFixture<CmppeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmppeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmppeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
