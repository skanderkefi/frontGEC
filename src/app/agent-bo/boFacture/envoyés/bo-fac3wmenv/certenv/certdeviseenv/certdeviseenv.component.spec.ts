import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertdeviseenvComponent } from './certdeviseenv.component';

describe('CertdeviseenvComponent', () => {
  let component: CertdeviseenvComponent;
  let fixture: ComponentFixture<CertdeviseenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertdeviseenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertdeviseenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
