import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoristdeviseComponent } from './tresoristdevise.component';

describe('TresoristdeviseComponent', () => {
  let component: TresoristdeviseComponent;
  let fixture: ComponentFixture<TresoristdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoristdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoristdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
