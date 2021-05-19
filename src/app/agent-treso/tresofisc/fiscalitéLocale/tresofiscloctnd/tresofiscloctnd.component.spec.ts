import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresofiscloctndComponent } from './tresofiscloctnd.component';

describe('TresofiscloctndComponent', () => {
  let component: TresofiscloctndComponent;
  let fixture: ComponentFixture<TresofiscloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresofiscloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresofiscloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
