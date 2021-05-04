import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncetndenvComponent } from './ancetndenv.component';

describe('AncetndenvComponent', () => {
  let component: AncetndenvComponent;
  let fixture: ComponentFixture<AncetndenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncetndenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncetndenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
