import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrjtntndComponent } from './crjtntnd.component';

describe('CrjtntndComponent', () => {
  let component: CrjtntndComponent;
  let fixture: ComponentFixture<CrjtntndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrjtntndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrjtntndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
