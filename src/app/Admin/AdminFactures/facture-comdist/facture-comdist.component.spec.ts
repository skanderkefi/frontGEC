import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureComdistComponent } from './facture-comdist.component';

describe('FactureComdistComponent', () => {
  let component: FactureComdistComponent;
  let fixture: ComponentFixture<FactureComdistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureComdistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureComdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
