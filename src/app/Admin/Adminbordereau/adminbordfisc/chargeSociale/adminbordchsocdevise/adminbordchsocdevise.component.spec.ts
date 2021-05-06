import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordchsocdeviseComponent } from './adminbordchsocdevise.component';

describe('AdminbordchsocdeviseComponent', () => {
  let component: AdminbordchsocdeviseComponent;
  let fixture: ComponentFixture<AdminbordchsocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordchsocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordchsocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
