import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureFinancementComponent } from './facture-financement.component';

describe('FactureFinancementComponent', () => {
  let component: FactureFinancementComponent;
  let fixture: ComponentFixture<FactureFinancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureFinancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureFinancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
