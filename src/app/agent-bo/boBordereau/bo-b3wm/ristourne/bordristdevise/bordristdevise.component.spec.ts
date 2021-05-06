import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordristdeviseComponent } from './bordristdevise.component';

describe('BordristdeviseComponent', () => {
  let component: BordristdeviseComponent;
  let fixture: ComponentFixture<BordristdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordristdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordristdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
