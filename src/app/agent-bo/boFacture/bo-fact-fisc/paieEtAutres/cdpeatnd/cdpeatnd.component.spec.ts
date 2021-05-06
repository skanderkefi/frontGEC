import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdpeatndComponent } from './cdpeatnd.component';

describe('CdpeatndComponent', () => {
  let component: CdpeatndComponent;
  let fixture: ComponentFixture<CdpeatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdpeatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdpeatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
