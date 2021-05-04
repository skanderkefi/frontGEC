import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { finenvTndComponent } from './tnd.component';

describe('TndComponent', () => {
  let component: finenvTndComponent;
  let fixture: ComponentFixture<finenvTndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ finenvTndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(finenvTndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
