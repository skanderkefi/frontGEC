import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdistComponent } from './comdist.component';

describe('ComdistComponent', () => {
  let component: ComdistComponent;
  let fixture: ComponentFixture<ComdistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComdistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
