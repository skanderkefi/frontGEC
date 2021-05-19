import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresopeadeviseComponent } from './tresopeadevise.component';

describe('TresopeadeviseComponent', () => {
  let component: TresopeadeviseComponent;
  let fixture: ComponentFixture<TresopeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresopeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresopeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
