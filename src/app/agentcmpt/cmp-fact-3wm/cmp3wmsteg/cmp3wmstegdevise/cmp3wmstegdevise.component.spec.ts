import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmstegdeviseComponent } from './cmp3wmstegdevise.component';

describe('Cmp3wmstegdeviseComponent', () => {
  let component: Cmp3wmstegdeviseComponent;
  let fixture: ComponentFixture<Cmp3wmstegdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmstegdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmstegdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
