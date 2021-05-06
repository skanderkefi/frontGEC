import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordcmddeviseComponent } from './bobordcmddevise.component';

describe('BobordcmddeviseComponent', () => {
  let component: BobordcmddeviseComponent;
  let fixture: ComponentFixture<BobordcmddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordcmddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordcmddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
