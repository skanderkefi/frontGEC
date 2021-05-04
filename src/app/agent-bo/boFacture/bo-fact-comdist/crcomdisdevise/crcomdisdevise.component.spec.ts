import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrcomdisdeviseComponent } from './crcomdisdevise.component';

describe('CrcomdisdeviseComponent', () => {
  let component: CrcomdisdeviseComponent;
  let fixture: ComponentFixture<CrcomdisdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrcomdisdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrcomdisdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
