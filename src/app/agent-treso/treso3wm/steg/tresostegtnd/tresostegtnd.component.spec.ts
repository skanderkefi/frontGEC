import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresostegtndComponent } from './tresostegtnd.component';

describe('TresostegtndComponent', () => {
  let component: TresostegtndComponent;
  let fixture: ComponentFixture<TresostegtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresostegtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresostegtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
