import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvforminttndComponent } from './envforminttnd.component';

describe('EnvforminttndComponent', () => {
  let component: EnvforminttndComponent;
  let fixture: ComponentFixture<EnvforminttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvforminttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvforminttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
