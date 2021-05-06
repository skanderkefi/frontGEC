import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincerttndComponent } from './admincerttnd.component';

describe('AdmincerttndComponent', () => {
  let component: AdmincerttndComponent;
  let fixture: ComponentFixture<AdmincerttndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincerttndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincerttndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
