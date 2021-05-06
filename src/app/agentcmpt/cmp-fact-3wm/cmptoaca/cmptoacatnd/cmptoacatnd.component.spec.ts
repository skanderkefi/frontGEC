import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptoacatndComponent } from './cmptoacatnd.component';

describe('CmptoacatndComponent', () => {
  let component: CmptoacatndComponent;
  let fixture: ComponentFixture<CmptoacatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptoacatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptoacatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
