import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpfddeviseComponent } from './cmpfddevise.component';

describe('CmpfddeviseComponent', () => {
  let component: CmpfddeviseComponent;
  let fixture: ComponentFixture<CmpfddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpfddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpfddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
