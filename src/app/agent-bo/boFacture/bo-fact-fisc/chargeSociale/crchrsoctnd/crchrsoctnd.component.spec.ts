import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrchrsoctndComponent } from './crchrsoctnd.component';

describe('CrchrsoctndComponent', () => {
  let component: CrchrsoctndComponent;
  let fixture: ComponentFixture<CrchrsoctndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrchrsoctndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrchrsoctndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
