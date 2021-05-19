import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresocertdeviseComponent } from './tresocertdevise.component';

describe('TresocertdeviseComponent', () => {
  let component: TresocertdeviseComponent;
  let fixture: ComponentFixture<TresocertdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresocertdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresocertdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
