import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncedeviseenvComponent } from './ancedeviseenv.component';

describe('AncedeviseenvComponent', () => {
  let component: AncedeviseenvComponent;
  let fixture: ComponentFixture<AncedeviseenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncedeviseenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncedeviseenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
