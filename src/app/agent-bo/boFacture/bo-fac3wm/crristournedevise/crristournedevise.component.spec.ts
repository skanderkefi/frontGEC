import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrristournedeviseComponent } from './crristournedevise.component';

describe('CrristournedeviseComponent', () => {
  let component: CrristournedeviseComponent;
  let fixture: ComponentFixture<CrristournedeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrristournedeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrristournedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
