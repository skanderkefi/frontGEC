import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFactFinanceComponent } from './bo-fact-finance.component';

describe('BoFactFinanceComponent', () => {
  let component: BoFactFinanceComponent;
  let fixture: ComponentFixture<BoFactFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFactFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFactFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
