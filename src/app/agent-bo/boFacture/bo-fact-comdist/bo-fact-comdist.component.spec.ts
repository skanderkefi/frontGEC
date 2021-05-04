import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFactComdistComponent } from './bo-fact-comdist.component';

describe('BoFactComdistComponent', () => {
  let component: BoFactComdistComponent;
  let fixture: ComponentFixture<BoFactComdistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFactComdistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFactComdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
