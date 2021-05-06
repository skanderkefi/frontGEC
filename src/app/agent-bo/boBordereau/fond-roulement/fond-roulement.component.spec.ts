import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondRoulementComponent } from './fond-roulement.component';

describe('FondRoulementComponent', () => {
  let component: FondRoulementComponent;
  let fixture: ComponentFixture<FondRoulementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondRoulementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondRoulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
