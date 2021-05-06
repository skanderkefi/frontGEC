import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptristndComponent } from './cmptristnd.component';

describe('CmptristndComponent', () => {
  let component: CmptristndComponent;
  let fixture: ComponentFixture<CmptristndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptristndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptristndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
