import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrristournetndComponent } from './crristournetnd.component';

describe('CrristournetndComponent', () => {
  let component: CrristournetndComponent;
  let fixture: ComponentFixture<CrristournetndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrristournetndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrristournetndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
