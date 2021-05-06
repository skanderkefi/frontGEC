import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrpittndComponent } from './crpittnd.component';

describe('CrpittndComponent', () => {
  let component: CrpittndComponent;
  let fixture: ComponentFixture<CrpittndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrpittndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrpittndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
