import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresolctndComponent } from './tresolctnd.component';

describe('TresolctndComponent', () => {
  let component: TresolctndComponent;
  let fixture: ComponentFixture<TresolctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresolctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresolctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
