import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3sotetelComponent } from './bo3sotetel.component';

describe('Bo3sotetelComponent', () => {
  let component: Bo3sotetelComponent;
  let fixture: ComponentFixture<Bo3sotetelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3sotetelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3sotetelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
