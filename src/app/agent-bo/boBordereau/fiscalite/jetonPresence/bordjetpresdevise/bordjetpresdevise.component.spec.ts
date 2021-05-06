import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordjetpresdeviseComponent } from './bordjetpresdevise.component';

describe('BordjetpresdeviseComponent', () => {
  let component: BordjetpresdeviseComponent;
  let fixture: ComponentFixture<BordjetpresdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordjetpresdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordjetpresdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
