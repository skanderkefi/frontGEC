import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpopdeviseComponent } from './cmpopdevise.component';

describe('CmpopdeviseComponent', () => {
  let component: CmpopdeviseComponent;
  let fixture: ComponentFixture<CmpopdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpopdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpopdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
