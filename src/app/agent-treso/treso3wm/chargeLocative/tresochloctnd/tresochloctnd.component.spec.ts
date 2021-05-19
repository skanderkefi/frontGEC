import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresochloctndComponent } from './tresochloctnd.component';

describe('TresochloctndComponent', () => {
  let component: TresochloctndComponent;
  let fixture: ComponentFixture<TresochloctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresochloctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresochloctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
