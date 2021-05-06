import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptretsaltndComponent } from './cmptretsaltnd.component';

describe('CmptretsaltndComponent', () => {
  let component: CmptretsaltndComponent;
  let fixture: ComponentFixture<CmptretsaltndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptretsaltndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptretsaltndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
