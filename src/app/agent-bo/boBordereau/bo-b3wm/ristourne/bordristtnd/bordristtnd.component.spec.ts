import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordristtndComponent } from './bordristtnd.component';

describe('BordristtndComponent', () => {
  let component: BordristtndComponent;
  let fixture: ComponentFixture<BordristtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordristtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordristtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
