import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordchlocdeviseComponent } from './bordchlocdevise.component';

describe('BordchlocdeviseComponent', () => {
  let component: BordchlocdeviseComponent;
  let fixture: ComponentFixture<BordchlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordchlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordchlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
