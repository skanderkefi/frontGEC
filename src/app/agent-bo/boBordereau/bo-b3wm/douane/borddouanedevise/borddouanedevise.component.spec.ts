import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorddouanedeviseComponent } from './borddouanedevise.component';

describe('BorddouanedeviseComponent', () => {
  let component: BorddouanedeviseComponent;
  let fixture: ComponentFixture<BorddouanedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorddouanedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorddouanedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
