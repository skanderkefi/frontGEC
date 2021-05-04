import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmlcComponent } from './bo3wmlc.component';

describe('Bo3wmlcComponent', () => {
  let component: Bo3wmlcComponent;
  let fixture: ComponentFixture<Bo3wmlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
