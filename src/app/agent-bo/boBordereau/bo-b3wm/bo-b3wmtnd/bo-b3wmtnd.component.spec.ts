import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoB3wmtndComponent } from './bo-b3wmtnd.component';

describe('BoB3wmtndComponent', () => {
  let component: BoB3wmtndComponent;
  let fixture: ComponentFixture<BoB3wmtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoB3wmtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoB3wmtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
