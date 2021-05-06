import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpfdtndComponent } from './cmpfdtnd.component';

describe('CmpfdtndComponent', () => {
  let component: CmpfdtndComponent;
  let fixture: ComponentFixture<CmpfdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpfdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpfdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
