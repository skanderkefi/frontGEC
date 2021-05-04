import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmsotetelComponent } from './bo3wmsotetel.component';

describe('Bo3wmsotetelComponent', () => {
  let component: Bo3wmsotetelComponent;
  let fixture: ComponentFixture<Bo3wmsotetelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmsotetelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmsotetelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
