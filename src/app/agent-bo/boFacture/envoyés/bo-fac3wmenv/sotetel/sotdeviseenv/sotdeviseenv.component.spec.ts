import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SotdeviseenvComponent } from './sotdeviseenv.component';

describe('SotdeviseenvComponent', () => {
  let component: SotdeviseenvComponent;
  let fixture: ComponentFixture<SotdeviseenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SotdeviseenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SotdeviseenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
