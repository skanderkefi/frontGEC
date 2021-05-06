import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordcertdeviseComponent } from './bobordcertdevise.component';

describe('BobordcertdeviseComponent', () => {
  let component: BobordcertdeviseComponent;
  let fixture: ComponentFixture<BobordcertdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordcertdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordcertdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
