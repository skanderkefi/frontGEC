import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejformintndComponent } from './rejformintnd.component';

describe('RejformintndComponent', () => {
  let component: RejformintndComponent;
  let fixture: ComponentFixture<RejformintndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejformintndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejformintndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
