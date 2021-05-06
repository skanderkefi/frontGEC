import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpcmdtndComponent } from './cmpcmdtnd.component';

describe('CmpcmdtndComponent', () => {
  let component: CmpcmdtndComponent;
  let fixture: ComponentFixture<CmpcmdtndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpcmdtndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpcmdtndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
