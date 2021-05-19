import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresojetprestndComponent } from './tresojetprestnd.component';

describe('TresojetprestndComponent', () => {
  let component: TresojetprestndComponent;
  let fixture: ComponentFixture<TresojetprestndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresojetprestndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresojetprestndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
