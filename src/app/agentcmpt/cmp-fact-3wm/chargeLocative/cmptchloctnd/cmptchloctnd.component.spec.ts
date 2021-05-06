import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptchloctndComponent } from './cmptchloctnd.component';

describe('CmptchloctndComponent', () => {
  let component: CmptchloctndComponent;
  let fixture: ComponentFixture<CmptchloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptchloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptchloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
