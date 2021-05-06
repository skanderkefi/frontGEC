import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptpittndComponent } from './cmptpittnd.component';

describe('CmptpittndComponent', () => {
  let component: CmptpittndComponent;
  let fixture: ComponentFixture<CmptpittndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptpittndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptpittndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
