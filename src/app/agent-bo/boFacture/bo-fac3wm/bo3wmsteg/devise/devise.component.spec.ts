import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { stcrDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: stcrDeviseComponent;
  let fixture: ComponentFixture<stcrDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ stcrDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(stcrDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
