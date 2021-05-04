import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacrembdeviseComponent } from './bofacrembdevise.component';

describe('BofacrembdeviseComponent', () => {
  let component: BofacrembdeviseComponent;
  let fixture: ComponentFixture<BofacrembdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacrembdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacrembdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
