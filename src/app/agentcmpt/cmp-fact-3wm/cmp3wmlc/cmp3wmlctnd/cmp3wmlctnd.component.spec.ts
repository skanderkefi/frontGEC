import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmlctndComponent } from './cmp3wmlctnd.component';

describe('Cmp3wmlctndComponent', () => {
  let component: Cmp3wmlctndComponent;
  let fixture: ComponentFixture<Cmp3wmlctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmlctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmlctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
