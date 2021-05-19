import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresosottndComponent } from './tresosottnd.component';

describe('TresosottndComponent', () => {
  let component: TresosottndComponent;
  let fixture: ComponentFixture<TresosottndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresosottndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresosottndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
