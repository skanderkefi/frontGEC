import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentBoComponent } from './agent-bo.component';

describe('AgentBoComponent', () => {
  let component: AgentBoComponent;
  let fixture: ComponentFixture<AgentBoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentBoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
