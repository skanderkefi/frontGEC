import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresochsocdeviseComponent } from './tresochsocdevise.component';

describe('TresochsocdeviseComponent', () => {
  let component: TresochsocdeviseComponent;
  let fixture: ComponentFixture<TresochsocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresochsocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresochsocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
