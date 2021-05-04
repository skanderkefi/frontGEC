import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisecomdisrjcComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: DevisecomdisrjcComponent;
  let fixture: ComponentFixture<DevisecomdisrjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisecomdisrjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisecomdisrjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
