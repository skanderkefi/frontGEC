import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordretsaltndComponent } from './bordretsaltnd.component';

describe('BordretsaltndComponent', () => {
  let component: BordretsaltndComponent;
  let fixture: ComponentFixture<BordretsaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordretsaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordretsaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
