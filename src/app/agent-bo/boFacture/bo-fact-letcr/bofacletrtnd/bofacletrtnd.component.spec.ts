import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacletrtndComponent } from './bofacletrtnd.component';

describe('BofacletrtndComponent', () => {
  let component: BofacletrtndComponent;
  let fixture: ComponentFixture<BofacletrtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacletrtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacletrtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
