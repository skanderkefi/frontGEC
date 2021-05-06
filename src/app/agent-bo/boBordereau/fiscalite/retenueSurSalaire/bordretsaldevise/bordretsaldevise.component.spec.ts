import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordretsaldeviseComponent } from './bordretsaldevise.component';

describe('BordretsaldeviseComponent', () => {
  let component: BordretsaldeviseComponent;
  let fixture: ComponentFixture<BordretsaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordretsaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordretsaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
