import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordstegdeviseComponent } from './adminbordstegdevise.component';

describe('AdminbordstegdeviseComponent', () => {
  let component: AdminbordstegdeviseComponent;
  let fixture: ComponentFixture<AdminbordstegdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordstegdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordstegdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
