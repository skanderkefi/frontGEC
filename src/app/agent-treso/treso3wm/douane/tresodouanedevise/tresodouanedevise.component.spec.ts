import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresodouanedeviseComponent } from './tresodouanedevise.component';

describe('TresodouanedeviseComponent', () => {
  let component: TresodouanedeviseComponent;
  let fixture: ComponentFixture<TresodouanedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresodouanedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresodouanedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
