import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscloctndComponent } from './fiscloctnd.component';

describe('FiscloctndComponent', () => {
  let component: FiscloctndComponent;
  let fixture: ComponentFixture<FiscloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
