import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmcertdeviseComponent } from './cmp3wmcertdevise.component';

describe('Cmp3wmcertdeviseComponent', () => {
  let component: Cmp3wmcertdeviseComponent;
  let fixture: ComponentFixture<Cmp3wmcertdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmcertdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmcertdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
