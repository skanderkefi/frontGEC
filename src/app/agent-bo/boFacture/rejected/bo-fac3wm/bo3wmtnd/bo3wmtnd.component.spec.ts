import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmtndComponent } from './bo3wmtnd.component';

describe('Bo3wmtndComponent', () => {
  let component: Bo3wmtndComponent;
  let fixture: ComponentFixture<Bo3wmtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
