import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbordcerttndComponent } from './adminbordcerttnd.component';

describe('AdminbordcerttndComponent', () => {
  let component: AdminbordcerttndComponent;
  let fixture: ComponentFixture<AdminbordcerttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbordcerttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbordcerttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
