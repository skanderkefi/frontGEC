import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresofindeviseComponent } from './tresofindevise.component';

describe('TresofindeviseComponent', () => {
  let component: TresofindeviseComponent;
  let fixture: ComponentFixture<TresofindeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresofindeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresofindeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
