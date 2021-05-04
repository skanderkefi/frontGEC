import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacletrdeviseComponent } from './bofacletrdevise.component';

describe('BofacletrdeviseComponent', () => {
  let component: BofacletrdeviseComponent;
  let fixture: ComponentFixture<BofacletrdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacletrdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacletrdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
