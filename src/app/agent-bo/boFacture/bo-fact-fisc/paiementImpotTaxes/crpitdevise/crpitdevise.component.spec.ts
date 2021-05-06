import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrpitdeviseComponent } from './crpitdevise.component';

describe('CrpitdeviseComponent', () => {
  let component: CrpitdeviseComponent;
  let fixture: ComponentFixture<CrpitdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrpitdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrpitdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
