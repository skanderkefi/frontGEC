import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordsotetelComponent } from './bordsotetel.component';

describe('BordsotetelComponent', () => {
  let component: BordsotetelComponent;
  let fixture: ComponentFixture<BordsotetelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordsotetelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordsotetelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
