import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresopitdeviseComponent } from './tresopitdevise.component';

describe('TresopitdeviseComponent', () => {
  let component: TresopitdeviseComponent;
  let fixture: ComponentFixture<TresopitdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresopitdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresopitdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
