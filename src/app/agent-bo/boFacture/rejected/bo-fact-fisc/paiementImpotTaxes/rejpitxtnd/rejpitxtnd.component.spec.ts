import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejpitxtndComponent } from './rejpitxtnd.component';

describe('RejpitxtndComponent', () => {
  let component: RejpitxtndComponent;
  let fixture: ComponentFixture<RejpitxtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejpitxtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejpitxtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
