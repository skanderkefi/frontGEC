import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondroulementComponent } from './fondroulement.component';

describe('FondroulementComponent', () => {
  let component: FondroulementComponent;
  let fixture: ComponentFixture<FondroulementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondroulementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondroulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
