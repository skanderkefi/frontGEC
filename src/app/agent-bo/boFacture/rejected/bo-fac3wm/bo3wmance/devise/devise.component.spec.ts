import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rjcanceDeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: rjcanceDeviseComponent;
  let fixture: ComponentFixture<rjcanceDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rjcanceDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rjcanceDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
