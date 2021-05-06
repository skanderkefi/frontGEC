import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrfrmintdeviseComponent } from './crfrmintdevise.component';

describe('CrfrmintdeviseComponent', () => {
  let component: CrfrmintdeviseComponent;
  let fixture: ComponentFixture<CrfrmintdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrfrmintdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrfrmintdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
