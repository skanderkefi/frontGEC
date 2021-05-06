import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmlcdeviseComponent } from './cmp3wmlcdevise.component';

describe('Cmp3wmlcdeviseComponent', () => {
  let component: Cmp3wmlcdeviseComponent;
  let fixture: ComponentFixture<Cmp3wmlcdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmlcdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmlcdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
