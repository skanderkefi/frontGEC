import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordpittndComponent } from './bordpittnd.component';

describe('BordpittndComponent', () => {
  let component: BordpittndComponent;
  let fixture: ComponentFixture<BordpittndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordpittndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordpittndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
