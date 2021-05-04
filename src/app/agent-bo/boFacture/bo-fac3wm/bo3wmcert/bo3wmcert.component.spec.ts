import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmcertComponent } from './bo3wmcert.component';

describe('Bo3wmcertComponent', () => {
  let component: Bo3wmcertComponent;
  let fixture: ComponentFixture<Bo3wmcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
