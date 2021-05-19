import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoancetndComponent } from './tresoancetnd.component';

describe('TresoancetndComponent', () => {
  let component: TresoancetndComponent;
  let fixture: ComponentFixture<TresoancetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoancetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoancetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
