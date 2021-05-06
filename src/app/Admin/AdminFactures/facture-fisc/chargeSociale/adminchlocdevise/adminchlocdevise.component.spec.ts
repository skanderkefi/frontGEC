import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchsocdeviseComponent } from './adminchlocdevise.component';

describe('AdminchsocdeviseComponent', () => {
  let component: AdminchsocdeviseComponent;
  let fixture: ComponentFixture<AdminchsocdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchsocdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchsocdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
