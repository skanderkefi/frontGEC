import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresofintndComponent } from './tresofintnd.component';

describe('TresofintndComponent', () => {
  let component: TresofintndComponent;
  let fixture: ComponentFixture<TresofintndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresofintndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresofintndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
