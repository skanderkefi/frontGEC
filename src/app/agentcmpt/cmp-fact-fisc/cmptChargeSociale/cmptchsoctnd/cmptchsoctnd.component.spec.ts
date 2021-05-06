import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptchsoctndComponent } from './cmptchsoctnd.component';

describe('CmptchsoctndComponent', () => {
  let component: CmptchsoctndComponent;
  let fixture: ComponentFixture<CmptchsoctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptchsoctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptchsoctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
