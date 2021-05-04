import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmdeviseComponent } from './bo3wmdevise.component';

describe('Bo3wmdeviseComponent', () => {
  let component: Bo3wmdeviseComponent;
  let fixture: ComponentFixture<Bo3wmdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
