import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmstegComponent } from './bo3wmsteg.component';

describe('Bo3wmstegComponent', () => {
  let component: Bo3wmstegComponent;
  let fixture: ComponentFixture<Bo3wmstegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmstegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmstegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
