import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisclocdeviseComponent } from './fisclocdevise.component';

describe('FisclocdeviseComponent', () => {
  let component: FisclocdeviseComponent;
  let fixture: ComponentFixture<FisclocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisclocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisclocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
