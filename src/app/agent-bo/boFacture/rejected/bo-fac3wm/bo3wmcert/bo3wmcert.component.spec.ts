import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rjctndBo3wmcertComponent } from './bo3wmcert.component';

describe('Bo3wmcertComponent', () => {
  let component: rjctndBo3wmcertComponent;
  let fixture: ComponentFixture<rjctndBo3wmcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rjctndBo3wmcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rjctndBo3wmcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
