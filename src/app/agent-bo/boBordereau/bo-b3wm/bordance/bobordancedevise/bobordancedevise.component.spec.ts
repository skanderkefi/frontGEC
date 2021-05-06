import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordancedeviseComponent } from './bobordancedevise.component';

describe('BobordancedeviseComponent', () => {
  let component: BobordancedeviseComponent;
  let fixture: ComponentFixture<BobordancedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordancedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordancedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
