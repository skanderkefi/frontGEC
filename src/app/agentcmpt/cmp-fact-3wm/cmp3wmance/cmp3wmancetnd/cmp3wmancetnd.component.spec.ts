import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmancetndComponent } from './cmp3wmancetnd.component';

describe('Cmp3wmancetndComponent', () => {
  let component: Cmp3wmancetndComponent;
  let fixture: ComponentFixture<Cmp3wmancetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmancetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmancetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
