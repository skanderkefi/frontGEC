import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresooacatndComponent } from './tresooacatnd.component';

describe('TresooacatndComponent', () => {
  let component: TresooacatndComponent;
  let fixture: ComponentFixture<TresooacatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresooacatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresooacatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
