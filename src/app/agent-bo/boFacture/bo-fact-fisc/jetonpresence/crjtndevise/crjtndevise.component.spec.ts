import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrjtndeviseComponent } from './crjtndevise.component';

describe('CrjtndeviseComponent', () => {
  let component: CrjtndeviseComponent;
  let fixture: ComponentFixture<CrjtndeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrjtndeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrjtndeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
