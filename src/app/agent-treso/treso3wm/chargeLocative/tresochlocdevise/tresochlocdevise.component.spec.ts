import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresochlocdeviseComponent } from './tresochlocdevise.component';

describe('TresochlocdeviseComponent', () => {
  let component: TresochlocdeviseComponent;
  let fixture: ComponentFixture<TresochlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresochlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresochlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
