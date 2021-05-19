import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresopeatndComponent } from './tresopeatnd.component';

describe('TresopeatndComponent', () => {
  let component: TresopeatndComponent;
  let fixture: ComponentFixture<TresopeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresopeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresopeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
