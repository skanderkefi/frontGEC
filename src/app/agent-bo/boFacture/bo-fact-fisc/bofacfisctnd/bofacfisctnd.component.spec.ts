import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacfisctndComponent } from './bofacfisctnd.component';

describe('BofacfisctndComponent', () => {
  let component: BofacfisctndComponent;
  let fixture: ComponentFixture<BofacfisctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacfisctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacfisctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
