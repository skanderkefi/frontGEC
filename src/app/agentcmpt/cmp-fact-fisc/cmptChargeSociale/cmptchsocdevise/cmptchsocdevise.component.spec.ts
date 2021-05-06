import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptchsocdeviseComponent } from './cmptchsocdevise.component';

describe('CmptchsocdeviseComponent', () => {
  let component: CmptchsocdeviseComponent;
  let fixture: ComponentFixture<CmptchsocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptchsocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptchsocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
