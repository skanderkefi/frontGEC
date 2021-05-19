import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresofisclocdeviseComponent } from './tresofisclocdevise.component';

describe('TresofisclocdeviseComponent', () => {
  let component: TresofisclocdeviseComponent;
  let fixture: ComponentFixture<TresofisclocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresofisclocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresofisclocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
