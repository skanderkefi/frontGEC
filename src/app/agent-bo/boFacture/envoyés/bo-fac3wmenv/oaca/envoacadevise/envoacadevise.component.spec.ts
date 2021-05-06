import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoacadeviseComponent } from './envoacadevise.component';

describe('EnvoacadeviseComponent', () => {
  let component: EnvoacadeviseComponent;
  let fixture: ComponentFixture<EnvoacadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoacadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoacadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
