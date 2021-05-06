import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrfrminttndComponent } from './crfrminttnd.component';

describe('CrfrminttndComponent', () => {
  let component: CrfrminttndComponent;
  let fixture: ComponentFixture<CrfrminttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrfrminttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrfrminttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
