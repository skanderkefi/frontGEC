import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordchsocdeviseComponent } from './bordchsocdevise.component';

describe('BordchsocdeviseComponent', () => {
  let component: BordchsocdeviseComponent;
  let fixture: ComponentFixture<BordchsocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordchsocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordchsocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
