import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresosotdeviseComponent } from './tresosotdevise.component';

describe('TresosotdeviseComponent', () => {
  let component: TresosotdeviseComponent;
  let fixture: ComponentFixture<TresosotdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresosotdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresosotdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
