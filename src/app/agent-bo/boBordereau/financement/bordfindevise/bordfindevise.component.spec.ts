import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordfindeviseComponent } from './bordfindevise.component';

describe('BordfindeviseComponent', () => {
  let component: BordfindeviseComponent;
  let fixture: ComponentFixture<BordfindeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordfindeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordfindeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
