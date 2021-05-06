import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordjetprestndComponent } from './bordjetprestnd.component';

describe('BordjetprestndComponent', () => {
  let component: BordjetprestndComponent;
  let fixture: ComponentFixture<BordjetprestndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordjetprestndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordjetprestndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
