import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bofac3wmtndComponent } from './bofac3wmtnd.component';

describe('Bofac3wmtndComponent', () => {
  let component: Bofac3wmtndComponent;
  let fixture: ComponentFixture<Bofac3wmtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bofac3wmtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bofac3wmtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
