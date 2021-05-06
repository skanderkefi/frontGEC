import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpfindeviseComponent } from './cmpfindevise.component';

describe('CmpfindeviseComponent', () => {
  let component: CmpfindeviseComponent;
  let fixture: ComponentFixture<CmpfindeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpfindeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpfindeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
