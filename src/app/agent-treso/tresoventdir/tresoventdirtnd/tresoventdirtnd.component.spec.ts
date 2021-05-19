import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoventdirtndComponent } from './tresoventdirtnd.component';

describe('TresoventdirtndComponent', () => {
  let component: TresoventdirtndComponent;
  let fixture: ComponentFixture<TresoventdirtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoventdirtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoventdirtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
