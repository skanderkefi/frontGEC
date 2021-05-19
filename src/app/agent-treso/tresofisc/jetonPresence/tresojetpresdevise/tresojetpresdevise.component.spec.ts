import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresojetpresdeviseComponent } from './tresojetpresdevise.component';

describe('TresojetpresdeviseComponent', () => {
  let component: TresojetpresdeviseComponent;
  let fixture: ComponentFixture<TresojetpresdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresojetpresdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresojetpresdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
