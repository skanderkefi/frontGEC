import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvchloctndComponent } from './envchloctnd.component';

describe('EnvchloctndComponent', () => {
  let component: EnvchloctndComponent;
  let fixture: ComponentFixture<EnvchloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvchloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvchloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
