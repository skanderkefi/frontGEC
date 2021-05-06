import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvchsowtndComponent } from './envchsowtnd.component';

describe('EnvchsowtndComponent', () => {
  let component: EnvchsowtndComponent;
  let fixture: ComponentFixture<EnvchsowtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvchsowtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvchsowtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
