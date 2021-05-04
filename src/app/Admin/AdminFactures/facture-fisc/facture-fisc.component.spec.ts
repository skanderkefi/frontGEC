import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureFiscComponent } from './facture-fisc.component';

describe('FactureFiscComponent', () => {
  let component: FactureFiscComponent;
  let fixture: ComponentFixture<FactureFiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureFiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureFiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
