import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFactComditComponent } from './bo-fact-comdit.component';

describe('BoFactComditComponent', () => {
  let component: BoFactComditComponent;
  let fixture: ComponentFixture<BoFactComditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFactComditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFactComditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
