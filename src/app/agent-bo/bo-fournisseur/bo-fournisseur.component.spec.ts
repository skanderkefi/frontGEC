import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFournisseurComponent } from './bo-fournisseur.component';

describe('BoFournisseurComponent', () => {
  let component: BoFournisseurComponent;
  let fixture: ComponentFixture<BoFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
