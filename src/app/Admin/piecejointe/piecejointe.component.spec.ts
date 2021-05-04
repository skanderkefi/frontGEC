import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecejointeComponent } from './piecejointe.component';

describe('PiecejointeComponent', () => {
  let component: PiecejointeComponent;
  let fixture: ComponentFixture<PiecejointeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecejointeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecejointeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
