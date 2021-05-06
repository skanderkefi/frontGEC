import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdouanedeviseComponent } from './crdouanedevise.component';

describe('CrdouanedeviseComponent', () => {
  let component: CrdouanedeviseComponent;
  let fixture: ComponentFixture<CrdouanedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrdouanedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdouanedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
