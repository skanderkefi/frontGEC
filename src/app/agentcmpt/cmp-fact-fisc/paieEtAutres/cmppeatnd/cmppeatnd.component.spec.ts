import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmppeatndComponent } from './cmppeatnd.component';

describe('CmppeatndComponent', () => {
  let component: CmppeatndComponent;
  let fixture: ComponentFixture<CmppeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmppeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmppeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
