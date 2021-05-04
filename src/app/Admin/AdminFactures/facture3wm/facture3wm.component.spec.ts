import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Facture3wmComponent } from './facture3wm.component';

describe('Facture3wmComponent', () => {
  let component: Facture3wmComponent;
  let fixture: ComponentFixture<Facture3wmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Facture3wmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Facture3wmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
