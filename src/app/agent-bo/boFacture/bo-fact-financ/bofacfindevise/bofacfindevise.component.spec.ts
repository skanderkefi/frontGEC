import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacfindeviseComponent } from './bofacfindevise.component';

describe('BofacfindeviseComponent', () => {
  let component: BofacfindeviseComponent;
  let fixture: ComponentFixture<BofacfindeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacfindeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacfindeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
