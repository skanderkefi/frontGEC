import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordlcComponent } from './bordlc.component';

describe('BordlcComponent', () => {
  let component: BordlcComponent;
  let fixture: ComponentFixture<BordlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
