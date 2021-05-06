import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordsotdeviseComponent } from './bobordsotdevise.component';

describe('BobordsotdeviseComponent', () => {
  let component: BobordsotdeviseComponent;
  let fixture: ComponentFixture<BobordsotdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordsotdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordsotdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
