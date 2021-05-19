import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresofdtndComponent } from './tresofdtnd.component';

describe('TresofdtndComponent', () => {
  let component: TresofdtndComponent;
  let fixture: ComponentFixture<TresofdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresofdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresofdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
