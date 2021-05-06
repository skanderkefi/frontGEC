import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpventtndComponent } from './cmpventtnd.component';

describe('CmpventtndComponent', () => {
  let component: CmpventtndComponent;
  let fixture: ComponentFixture<CmpventtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpventtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpventtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
