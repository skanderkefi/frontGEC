import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoristtndComponent } from './tresoristtnd.component';

describe('TresoristtndComponent', () => {
  let component: TresoristtndComponent;
  let fixture: ComponentFixture<TresoristtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoristtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoristtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
