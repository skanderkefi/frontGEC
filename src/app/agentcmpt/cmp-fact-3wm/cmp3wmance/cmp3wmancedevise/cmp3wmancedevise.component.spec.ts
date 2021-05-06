import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmancedeviseComponent } from './cmp3wmancedevise.component';

describe('Cmp3wmancedeviseComponent', () => {
  let component: Cmp3wmancedeviseComponent;
  let fixture: ComponentFixture<Cmp3wmancedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmancedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmancedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
