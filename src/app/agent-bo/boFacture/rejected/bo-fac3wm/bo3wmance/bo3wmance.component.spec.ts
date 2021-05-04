import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rjctndBo3wmanceComponent } from './bo3wmance.component';

describe('Bo3wmanceComponent', () => {
  let component: rjctndBo3wmanceComponent;
  let fixture: ComponentFixture<rjctndBo3wmanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rjctndBo3wmanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rjctndBo3wmanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
