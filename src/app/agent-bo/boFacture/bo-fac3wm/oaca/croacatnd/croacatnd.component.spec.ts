import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroacatndComponent } from './croacatnd.component';

describe('CroacatndComponent', () => {
  let component: CroacatndComponent;
  let fixture: ComponentFixture<CroacatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroacatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroacatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
