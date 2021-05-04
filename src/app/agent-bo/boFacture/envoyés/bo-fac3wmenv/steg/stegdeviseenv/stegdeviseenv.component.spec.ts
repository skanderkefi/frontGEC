import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StegdeviseenvComponent } from './stegdeviseenv.component';

describe('StegdeviseenvComponent', () => {
  let component: StegdeviseenvComponent;
  let fixture: ComponentFixture<StegdeviseenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StegdeviseenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StegdeviseenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
