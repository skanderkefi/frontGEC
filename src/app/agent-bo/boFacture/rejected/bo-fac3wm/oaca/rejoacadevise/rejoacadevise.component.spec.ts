import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoacadeviseComponent } from './rejoacadevise.component';

describe('RejoacadeviseComponent', () => {
  let component: RejoacadeviseComponent;
  let fixture: ComponentFixture<RejoacadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejoacadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoacadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
