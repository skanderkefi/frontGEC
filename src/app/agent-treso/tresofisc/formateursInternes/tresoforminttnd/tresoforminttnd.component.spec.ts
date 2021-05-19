import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoforminttndComponent } from './tresoforminttnd.component';

describe('TresoforminttndComponent', () => {
  let component: TresoforminttndComponent;
  let fixture: ComponentFixture<TresoforminttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoforminttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoforminttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
