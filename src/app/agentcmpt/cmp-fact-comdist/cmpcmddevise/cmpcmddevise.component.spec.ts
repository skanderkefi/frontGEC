import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpcmddeviseComponent } from './cmpcmddevise.component';

describe('CmpcmddeviseComponent', () => {
  let component: CmpcmddeviseComponent;
  let fixture: ComponentFixture<CmpcmddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpcmddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpcmddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
