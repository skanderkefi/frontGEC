import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoformintdeviseComponent } from './tresoformintdevise.component';

describe('TresoformintdeviseComponent', () => {
  let component: TresoformintdeviseComponent;
  let fixture: ComponentFixture<TresoformintdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoformintdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoformintdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
