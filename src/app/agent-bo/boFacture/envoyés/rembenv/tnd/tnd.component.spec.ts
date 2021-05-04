import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { remenvTndComponent } from './tnd.component';

describe('remenvTndComponent', () => {
  let component: remenvTndComponent;
  let fixture: ComponentFixture<remenvTndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ remenvTndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(remenvTndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
