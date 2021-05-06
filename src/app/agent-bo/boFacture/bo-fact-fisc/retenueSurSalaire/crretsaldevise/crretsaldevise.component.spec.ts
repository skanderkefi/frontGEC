import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrretsaldeviseComponent } from './crretsaldevise.component';

describe('CrretsaldeviseComponent', () => {
  let component: CrretsaldeviseComponent;
  let fixture: ComponentFixture<CrretsaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrretsaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrretsaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
