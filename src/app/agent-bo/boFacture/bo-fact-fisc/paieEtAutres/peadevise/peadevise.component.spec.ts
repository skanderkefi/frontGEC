import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeadeviseComponent } from './peadevise.component';

describe('PeadeviseComponent', () => {
  let component: PeadeviseComponent;
  let fixture: ComponentFixture<PeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
