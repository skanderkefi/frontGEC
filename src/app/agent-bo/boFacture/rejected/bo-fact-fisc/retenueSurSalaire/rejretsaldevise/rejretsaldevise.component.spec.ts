import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejretsaldeviseComponent } from './rejretsaldevise.component';

describe('RejretsaldeviseComponent', () => {
  let component: RejretsaldeviseComponent;
  let fixture: ComponentFixture<RejretsaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejretsaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejretsaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
