import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresodouanetndComponent } from './tresodouanetnd.component';

describe('TresodouanetndComponent', () => {
  let component: TresodouanetndComponent;
  let fixture: ComponentFixture<TresodouanetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresodouanetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresodouanetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
