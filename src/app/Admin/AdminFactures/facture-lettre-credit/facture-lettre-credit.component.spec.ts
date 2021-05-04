import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureLettreCreditComponent } from './facture-lettre-credit.component';

describe('FactureLettreCreditComponent', () => {
  let component: FactureLettreCreditComponent;
  let fixture: ComponentFixture<FactureLettreCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureLettreCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureLettreCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
