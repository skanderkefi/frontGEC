import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejjetprestndComponent } from './rejjetprestnd.component';

describe('RejjetprestndComponent', () => {
  let component: RejjetprestndComponent;
  let fixture: ComponentFixture<RejjetprestndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejjetprestndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejjetprestndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
