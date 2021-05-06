import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejchsoctndComponent } from './rejchsoctnd.component';

describe('RejchsoctndComponent', () => {
  let component: RejchsoctndComponent;
  let fixture: ComponentFixture<RejchsoctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejchsoctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejchsoctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
