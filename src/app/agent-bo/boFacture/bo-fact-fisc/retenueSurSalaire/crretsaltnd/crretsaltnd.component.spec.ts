import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrretsaltndComponent } from './crretsaltnd.component';

describe('CrretsaltndComponent', () => {
  let component: CrretsaltndComponent;
  let fixture: ComponentFixture<CrretsaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrretsaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrretsaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
