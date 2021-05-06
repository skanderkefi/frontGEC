import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordformintdeviseComponent } from './adminbordformintdevise.component';

describe('AdminbordformintdeviseComponent', () => {
  let component: AdminbordformintdeviseComponent;
  let fixture: ComponentFixture<AdminbordformintdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordformintdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordformintdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
