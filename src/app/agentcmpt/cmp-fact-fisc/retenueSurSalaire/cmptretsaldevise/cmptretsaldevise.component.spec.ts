import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptretsaldeviseComponent } from './cmptretsaldevise.component';

describe('CmptretsaldeviseComponent', () => {
  let component: CmptretsaldeviseComponent;
  let fixture: ComponentFixture<CmptretsaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptretsaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptretsaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
