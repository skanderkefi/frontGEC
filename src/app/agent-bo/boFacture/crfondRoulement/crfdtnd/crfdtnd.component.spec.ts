import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrfdtndComponent } from './crfdtnd.component';

describe('CrfdtndComponent', () => {
  let component: CrfdtndComponent;
  let fixture: ComponentFixture<CrfdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrfdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrfdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
