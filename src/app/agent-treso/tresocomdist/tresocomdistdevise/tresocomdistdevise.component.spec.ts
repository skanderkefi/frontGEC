import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresocomdistdeviseComponent } from './tresocomdistdevise.component';

describe('TresocomdistdeviseComponent', () => {
  let component: TresocomdistdeviseComponent;
  let fixture: ComponentFixture<TresocomdistdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresocomdistdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresocomdistdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
