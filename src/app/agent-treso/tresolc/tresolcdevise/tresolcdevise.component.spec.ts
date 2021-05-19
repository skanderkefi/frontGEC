import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresolcdeviseComponent } from './tresolcdevise.component';

describe('TresolcdeviseComponent', () => {
  let component: TresolcdeviseComponent;
  let fixture: ComponentFixture<TresolcdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresolcdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresolcdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
