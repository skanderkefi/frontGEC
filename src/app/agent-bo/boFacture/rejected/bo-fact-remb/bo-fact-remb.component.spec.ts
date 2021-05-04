import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFactRembComponent } from './bo-fact-remb.component';

describe('BoFactRembComponent', () => {
  let component: BoFactRembComponent;
  let fixture: ComponentFixture<BoFactRembComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFactRembComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFactRembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
