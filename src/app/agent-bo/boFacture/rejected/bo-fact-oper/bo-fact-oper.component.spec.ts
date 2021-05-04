import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFactOperComponent } from './bo-fact-oper.component';

describe('BoFactOperComponent', () => {
  let component: BoFactOperComponent;
  let fixture: ComponentFixture<BoFactOperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFactOperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFactOperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
