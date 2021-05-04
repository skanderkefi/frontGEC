import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { finenvDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: finenvDeviseComponent;
  let fixture: ComponentFixture<finenvDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ finenvDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(finenvDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
