import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresocomdisttndComponent } from './tresocomdisttnd.component';

describe('TresocomdisttndComponent', () => {
  let component: TresocomdisttndComponent;
  let fixture: ComponentFixture<TresocomdisttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresocomdisttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresocomdisttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
