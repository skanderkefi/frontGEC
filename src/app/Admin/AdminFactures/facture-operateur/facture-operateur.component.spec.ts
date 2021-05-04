import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureOperateurComponent } from './facture-operateur.component';

describe('FactureOperateurComponent', () => {
  let component: FactureOperateurComponent;
  let fixture: ComponentFixture<FactureOperateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureOperateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
