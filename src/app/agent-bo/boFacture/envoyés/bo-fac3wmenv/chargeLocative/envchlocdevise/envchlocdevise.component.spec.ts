import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvchlocdeviseComponent } from './envchlocdevise.component';

describe('EnvchlocdeviseComponent', () => {
  let component: EnvchlocdeviseComponent;
  let fixture: ComponentFixture<EnvchlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvchlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvchlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
