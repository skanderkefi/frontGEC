import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresoretsaltndComponent } from './tresoretsaltnd.component';

describe('TresoretsaltndComponent', () => {
  let component: TresoretsaltndComponent;
  let fixture: ComponentFixture<TresoretsaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresoretsaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresoretsaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
