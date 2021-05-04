import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bordereau3wmtndComponent } from './bordereau3wmtnd.component';

describe('Bordereau3wmtndComponent', () => {
  let component: Bordereau3wmtndComponent;
  let fixture: ComponentFixture<Bordereau3wmtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bordereau3wmtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bordereau3wmtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
