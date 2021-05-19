import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresofddeviseComponent } from './tresofddevise.component';

describe('TresofddeviseComponent', () => {
  let component: TresofddeviseComponent;
  let fixture: ComponentFixture<TresofddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresofddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresofddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
