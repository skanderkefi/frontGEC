import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ventenvTndComponent } from './tnd.component';

describe('TndComponent', () => {
  let component: ventenvTndComponent;
  let fixture: ComponentFixture<ventenvTndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ventenvTndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ventenvTndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
