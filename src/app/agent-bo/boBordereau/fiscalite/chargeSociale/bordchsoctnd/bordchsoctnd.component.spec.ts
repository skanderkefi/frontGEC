import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordchsoctndComponent } from './bordchsoctnd.component';

describe('BordchsoctndComponent', () => {
  let component: BordchsoctndComponent;
  let fixture: ComponentFixture<BordchsoctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordchsoctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordchsoctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
