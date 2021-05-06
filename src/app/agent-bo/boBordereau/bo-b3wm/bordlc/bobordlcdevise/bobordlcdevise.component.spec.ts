import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordlcdeviseComponent } from './bobordlcdevise.component';

describe('BobordlcdeviseComponent', () => {
  let component: BobordlcdeviseComponent;
  let fixture: ComponentFixture<BobordlcdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordlcdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordlcdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
