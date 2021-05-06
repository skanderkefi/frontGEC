import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejchlocdeviseComponent } from './rejchlocdevise.component';

describe('RejchlocdeviseComponent', () => {
  let component: RejchlocdeviseComponent;
  let fixture: ComponentFixture<RejchlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejchlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejchlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
