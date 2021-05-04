import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordanceComponent } from './bordance.component';

describe('BordanceComponent', () => {
  let component: BordanceComponent;
  let fixture: ComponentFixture<BordanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
