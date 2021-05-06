import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejristtndComponent } from './rejristtnd.component';

describe('RejristtndComponent', () => {
  let component: RejristtndComponent;
  let fixture: ComponentFixture<RejristtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejristtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejristtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
