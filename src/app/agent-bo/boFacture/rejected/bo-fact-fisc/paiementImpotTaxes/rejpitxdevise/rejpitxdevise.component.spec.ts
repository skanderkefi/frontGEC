import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejpitxdeviseComponent } from './rejpitxdevise.component';

describe('RejpitxdeviseComponent', () => {
  let component: RejpitxdeviseComponent;
  let fixture: ComponentFixture<RejpitxdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejpitxdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejpitxdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
