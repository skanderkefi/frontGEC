import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvristournetndComponent } from './envristournetnd.component';

describe('EnvristournetndComponent', () => {
  let component: EnvristournetndComponent;
  let fixture: ComponentFixture<EnvristournetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvristournetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvristournetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
