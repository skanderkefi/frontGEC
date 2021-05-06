import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejfisclocdeviseComponent } from './rejfisclocdevise.component';

describe('RejfisclocdeviseComponent', () => {
  let component: RejfisclocdeviseComponent;
  let fixture: ComponentFixture<RejfisclocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejfisclocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejfisclocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
