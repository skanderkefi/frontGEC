import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sotrjcDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: sotrjcDeviseComponent;
  let fixture: ComponentFixture<sotrjcDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sotrjcDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sotrjcDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
