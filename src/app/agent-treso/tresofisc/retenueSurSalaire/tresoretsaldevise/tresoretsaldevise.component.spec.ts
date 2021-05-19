import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoretsaldeviseComponent } from './tresoretsaldevise.component';

describe('TresoretsaldeviseComponent', () => {
  let component: TresoretsaldeviseComponent;
  let fixture: ComponentFixture<TresoretsaldeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoretsaldeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoretsaldeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
