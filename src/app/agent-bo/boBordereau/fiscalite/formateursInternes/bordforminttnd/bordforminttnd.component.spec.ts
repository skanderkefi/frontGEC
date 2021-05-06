import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordforminttndComponent } from './bordforminttnd.component';

describe('BordforminttndComponent', () => {
  let component: BordforminttndComponent;
  let fixture: ComponentFixture<BordforminttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordforminttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordforminttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
