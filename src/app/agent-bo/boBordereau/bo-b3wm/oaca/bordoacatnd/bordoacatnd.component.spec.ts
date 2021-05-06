import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordoacatndComponent } from './bordoacatnd.component';

describe('BordoacatndComponent', () => {
  let component: BordoacatndComponent;
  let fixture: ComponentFixture<BordoacatndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordoacatndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordoacatndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
