import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorembtndComponent } from './tresorembtnd.component';

describe('TresorembtndComponent', () => {
  let component: TresorembtndComponent;
  let fixture: ComponentFixture<TresorembtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresorembtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorembtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
