import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordfisclocdeviseComponent } from './bordfisclocdevise.component';

describe('BordfisclocdeviseComponent', () => {
  let component: BordfisclocdeviseComponent;
  let fixture: ComponentFixture<BordfisclocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordfisclocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordfisclocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
