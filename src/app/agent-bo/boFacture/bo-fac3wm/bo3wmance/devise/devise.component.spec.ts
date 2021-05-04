import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrancedeviseComponent } from './crdevise.component';

describe('DeviseComponent', () => {
  let component: CrancedeviseComponent;
  let fixture: ComponentFixture<CrancedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrancedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrancedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
