import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentcmptComponent } from './agentcmpt.component';

describe('AgentcmptComponent', () => {
  let component: AgentcmptComponent;
  let fixture: ComponentFixture<AgentcmptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentcmptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentcmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
