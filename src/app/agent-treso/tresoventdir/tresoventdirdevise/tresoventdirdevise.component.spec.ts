import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoventdirdeviseComponent } from './tresoventdirdevise.component';

describe('TresoventdirdeviseComponent', () => {
  let component: TresoventdirdeviseComponent;
  let fixture: ComponentFixture<TresoventdirdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoventdirdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoventdirdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
