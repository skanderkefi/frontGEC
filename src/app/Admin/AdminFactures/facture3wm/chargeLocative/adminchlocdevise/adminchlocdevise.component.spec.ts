import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchlocdeviseComponent } from './adminchlocdevise.component';

describe('AdminchlocdeviseComponent', () => {
  let component: AdminchlocdeviseComponent;
  let fixture: ComponentFixture<AdminchlocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchlocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchlocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
