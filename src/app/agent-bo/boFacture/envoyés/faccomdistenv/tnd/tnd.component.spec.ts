import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TndComponent } from './tnd.component';

describe('TndComponent', () => {
  let component: TndComponent;
  let fixture: ComponentFixture<TndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
