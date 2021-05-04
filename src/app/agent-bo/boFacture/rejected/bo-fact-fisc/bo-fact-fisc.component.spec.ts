import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFactFiscComponent } from './bo-fact-fisc.component';

describe('BoFactFiscComponent', () => {
  let component: BoFactFiscComponent;
  let fixture: ComponentFixture<BoFactFiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFactFiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFactFiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
