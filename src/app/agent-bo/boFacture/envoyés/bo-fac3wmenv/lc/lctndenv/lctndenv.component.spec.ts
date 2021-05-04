import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LctndenvComponent } from './lctndenv.component';

describe('LctndenvComponent', () => {
  let component: LctndenvComponent;
  let fixture: ComponentFixture<LctndenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LctndenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LctndenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
