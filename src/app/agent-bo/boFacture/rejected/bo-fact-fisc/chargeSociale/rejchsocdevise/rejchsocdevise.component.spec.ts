import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejchsocdeviseComponent } from './rejchsocdevise.component';

describe('RejchsocdeviseComponent', () => {
  let component: RejchsocdeviseComponent;
  let fixture: ComponentFixture<RejchsocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejchsocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejchsocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
