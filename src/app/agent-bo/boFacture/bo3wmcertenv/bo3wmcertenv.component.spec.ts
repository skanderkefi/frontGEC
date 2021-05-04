import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmcertenvComponent } from './bo3wmcertenv.component';

describe('Bo3wmcertenvComponent', () => {
  let component: Bo3wmcertenvComponent;
  let fixture: ComponentFixture<Bo3wmcertenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmcertenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmcertenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
