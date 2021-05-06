import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordchloctndComponent } from './bordchloctnd.component';

describe('BordchloctndComponent', () => {
  let component: BordchloctndComponent;
  let fixture: ComponentFixture<BordchloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordchloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordchloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
