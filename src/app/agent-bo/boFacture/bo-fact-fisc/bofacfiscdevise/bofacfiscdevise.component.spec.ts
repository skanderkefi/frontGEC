import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacfiscdeviseComponent } from './bofacfiscdevise.component';

describe('BofacfiscdeviseComponent', () => {
  let component: BofacfiscdeviseComponent;
  let fixture: ComponentFixture<BofacfiscdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacfiscdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacfiscdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
