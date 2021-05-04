import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo3wmstegtndrjcComponent } from './bo3wmsteg.component';

describe('Bo3wmstegComponent', () => {
  let component: Bo3wmstegtndrjcComponent;
  let fixture: ComponentFixture<Bo3wmstegtndrjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo3wmstegtndrjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo3wmstegtndrjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
