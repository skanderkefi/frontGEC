import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ventenvDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: ventenvDeviseComponent;
  let fixture: ComponentFixture<ventenvDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ventenvDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ventenvDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
