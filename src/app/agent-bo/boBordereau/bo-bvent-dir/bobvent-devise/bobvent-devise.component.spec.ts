import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobventDeviseComponent } from './bobvent-devise.component';

describe('BobventDeviseComponent', () => {
  let component: BobventDeviseComponent;
  let fixture: ComponentFixture<BobventDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobventDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobventDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
