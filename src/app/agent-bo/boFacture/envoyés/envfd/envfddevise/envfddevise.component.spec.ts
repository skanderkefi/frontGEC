import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvfddeviseComponent } from './envfddevise.component';

describe('EnvfddeviseComponent', () => {
  let component: EnvfddeviseComponent;
  let fixture: ComponentFixture<EnvfddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvfddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvfddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
