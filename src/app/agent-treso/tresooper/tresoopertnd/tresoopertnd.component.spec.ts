import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoopertndComponent } from './tresoopertnd.component';

describe('TresoopertndComponent', () => {
  let component: TresoopertndComponent;
  let fixture: ComponentFixture<TresoopertndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoopertndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoopertndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
