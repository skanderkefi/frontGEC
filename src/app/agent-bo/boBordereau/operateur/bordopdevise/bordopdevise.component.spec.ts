import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordopdeviseComponent } from './bordopdevise.component';

describe('BordopdeviseComponent', () => {
  let component: BordopdeviseComponent;
  let fixture: ComponentFixture<BordopdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordopdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordopdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
