import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { fiscenvDeviseComponent } from './fiscenvDevise.component';

describe('fiscenvDeviseComponent', () => {
  let component: fiscenvDeviseComponent;
  let fixture: ComponentFixture<fiscenvDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ fiscenvDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(fiscenvDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
