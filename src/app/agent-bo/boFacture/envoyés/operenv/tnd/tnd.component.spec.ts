import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { openvTndComponent } from './tnd.component';

describe('TndComponent', () => {
  let component: openvTndComponent;
  let fixture: ComponentFixture<openvTndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ openvTndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(openvTndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
