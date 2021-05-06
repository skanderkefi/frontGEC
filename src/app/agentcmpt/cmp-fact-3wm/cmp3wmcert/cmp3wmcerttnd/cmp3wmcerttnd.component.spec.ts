import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmcerttndComponent } from './cmp3wmcerttnd.component';

describe('Cmp3wmcerttndComponent', () => {
  let component: Cmp3wmcerttndComponent;
  let fixture: ComponentFixture<Cmp3wmcerttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmcerttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmcerttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
