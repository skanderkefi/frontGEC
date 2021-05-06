import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptchlocdeviseComponent } from './cmptchlocdevise.component';

describe('CmptchlocdeviseComponent', () => {
  let component: CmptchlocdeviseComponent;
  let fixture: ComponentFixture<CmptchlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptchlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptchlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
