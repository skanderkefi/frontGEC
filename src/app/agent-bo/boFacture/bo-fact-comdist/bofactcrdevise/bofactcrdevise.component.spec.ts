import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofactcrdeviseComponent } from './bofactcrdevise.component';

describe('BofactcrdeviseComponent', () => {
  let component: BofactcrdeviseComponent;
  let fixture: ComponentFixture<BofactcrdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofactcrdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofactcrdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
