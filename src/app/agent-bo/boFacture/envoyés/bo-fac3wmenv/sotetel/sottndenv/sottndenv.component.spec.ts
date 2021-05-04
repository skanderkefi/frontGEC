import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SottndenvComponent } from './sottndenv.component';

describe('SottndenvComponent', () => {
  let component: SottndenvComponent;
  let fixture: ComponentFixture<SottndenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SottndenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SottndenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
