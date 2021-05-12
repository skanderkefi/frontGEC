import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { boBordComdistTndComponent } from './boBordComdistTnd.component';

describe('boBordComdistTndComponent', () => {
  let component: boBordComdistTndComponent;
  let fixture: ComponentFixture<boBordComdistTndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ boBordComdistTndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(boBordComdistTndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
