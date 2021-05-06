import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordpitdevieComponent } from './bordpitdevie.component';

describe('BordpitdevieComponent', () => {
  let component: BordpitdevieComponent;
  let fixture: ComponentFixture<BordpitdevieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordpitdevieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordpitdevieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
