import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorembdeviseComponent } from './tresorembdevise.component';

describe('TresorembdeviseComponent', () => {
  let component: TresorembdeviseComponent;
  let fixture: ComponentFixture<TresorembdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresorembdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorembdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
