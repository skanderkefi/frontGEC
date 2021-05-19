import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresooperdeviseComponent } from './tresooperdevise.component';

describe('TresooperdeviseComponent', () => {
  let component: TresooperdeviseComponent;
  let fixture: ComponentFixture<TresooperdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresooperdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresooperdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
