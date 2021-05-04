import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { remenvDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: remenvDeviseComponent;
  let fixture: ComponentFixture<remenvDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ remenvDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(remenvDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
