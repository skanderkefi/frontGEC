import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerttndenvComponent } from './certtndenv.component';

describe('CerttndenvComponent', () => {
  let component: CerttndenvComponent;
  let fixture: ComponentFixture<CerttndenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerttndenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerttndenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
