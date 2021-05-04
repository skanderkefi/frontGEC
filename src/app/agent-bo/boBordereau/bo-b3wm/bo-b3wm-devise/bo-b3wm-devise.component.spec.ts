import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoB3wmDeviseComponent } from './bo-b3wm-devise.component';

describe('BoB3wmDeviseComponent', () => {
  let component: BoB3wmDeviseComponent;
  let fixture: ComponentFixture<BoB3wmDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoB3wmDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoB3wmDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
