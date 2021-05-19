import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresocerttndComponent } from './tresocerttnd.component';

describe('TresocerttndComponent', () => {
  let component: TresocerttndComponent;
  let fixture: ComponentFixture<TresocerttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresocerttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresocerttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
