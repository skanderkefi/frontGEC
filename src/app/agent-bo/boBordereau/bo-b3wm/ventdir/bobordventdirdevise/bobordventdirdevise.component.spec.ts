import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordventdirdeviseComponent } from './bobordventdirdevise.component';

describe('BobordventdirdeviseComponent', () => {
  let component: BobordventdirdeviseComponent;
  let fixture: ComponentFixture<BobordventdirdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordventdirdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordventdirdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
