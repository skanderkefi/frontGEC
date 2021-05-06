import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordoacadeviseComponent } from './bordoacadevise.component';

describe('BordoacadeviseComponent', () => {
  let component: BordoacadeviseComponent;
  let fixture: ComponentFixture<BordoacadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordoacadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordoacadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
