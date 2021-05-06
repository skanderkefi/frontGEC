import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptforminttndComponent } from './cmptforminttnd.component';

describe('CmptforminttndComponent', () => {
  let component: CmptforminttndComponent;
  let fixture: ComponentFixture<CmptforminttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptforminttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptforminttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
