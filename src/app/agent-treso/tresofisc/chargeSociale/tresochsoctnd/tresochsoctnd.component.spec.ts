import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresochsoctndComponent } from './tresochsoctnd.component';

describe('TresochsoctndComponent', () => {
  let component: TresochsoctndComponent;
  let fixture: ComponentFixture<TresochsoctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresochsoctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresochsoctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
