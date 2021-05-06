import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmstegtndComponent } from './cmp3wmstegtnd.component';

describe('Cmp3wmstegtndComponent', () => {
  let component: Cmp3wmstegtndComponent;
  let fixture: ComponentFixture<Cmp3wmstegtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmstegtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmstegtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
