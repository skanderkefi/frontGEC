import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ventBo3wmlcComponent } from './bo3wmlc.component';

describe('Bo3wmlcComponent', () => {
  let component: ventBo3wmlcComponent;
  let fixture: ComponentFixture<ventBo3wmlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ventBo3wmlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ventBo3wmlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
