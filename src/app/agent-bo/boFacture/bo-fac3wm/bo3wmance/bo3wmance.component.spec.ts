import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmanceComponent } from './bo3wmance.component';

describe('Bo3wmanceComponent', () => {
  let component: Bo3wmanceComponent;
  let fixture: ComponentFixture<Bo3wmanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
