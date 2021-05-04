import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdeviseComponent } from './crdevise.component';

describe('DeviseComponent', () => {
  let component: CrdeviseComponent;
  let fixture: ComponentFixture<CrdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
