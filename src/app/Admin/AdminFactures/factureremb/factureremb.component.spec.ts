import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturerembComponent } from './factureremb.component';

describe('FacturerembComponent', () => {
  let component: FacturerembComponent;
  let fixture: ComponentFixture<FacturerembComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturerembComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturerembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
