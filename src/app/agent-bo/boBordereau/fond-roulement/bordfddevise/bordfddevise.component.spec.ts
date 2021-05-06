import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordfddeviseComponent } from './bordfddevise.component';

describe('BordfddeviseComponent', () => {
  let component: BordfddeviseComponent;
  let fixture: ComponentFixture<BordfddeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordfddeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordfddeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
