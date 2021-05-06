import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptrisdeviseComponent } from './cmptrisdevise.component';

describe('CmptrisdeviseComponent', () => {
  let component: CmptrisdeviseComponent;
  let fixture: ComponentFixture<CmptrisdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptrisdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptrisdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
