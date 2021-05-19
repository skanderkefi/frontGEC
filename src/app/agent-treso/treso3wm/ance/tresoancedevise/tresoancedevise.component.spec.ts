import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoancedeviseComponent } from './tresoancedevise.component';

describe('TresoancedeviseComponent', () => {
  let component: TresoancedeviseComponent;
  let fixture: ComponentFixture<TresoancedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoancedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoancedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
