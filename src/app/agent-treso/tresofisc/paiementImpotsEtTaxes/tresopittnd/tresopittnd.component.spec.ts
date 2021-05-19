import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresopittndComponent } from './tresopittnd.component';

describe('TresopittndComponent', () => {
  let component: TresopittndComponent;
  let fixture: ComponentFixture<TresopittndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresopittndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresopittndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
