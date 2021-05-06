import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordristdeviseComponent } from './adminbordristdevise.component';

describe('AdminbordristdeviseComponent', () => {
  let component: AdminbordristdeviseComponent;
  let fixture: ComponentFixture<AdminbordristdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordristdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordristdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
