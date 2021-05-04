import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BofacopdeviseComponent } from './bofacopdevise.component';

describe('BofacopdeviseComponent', () => {
  let component: BofacopdeviseComponent;
  let fixture: ComponentFixture<BofacopdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BofacopdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BofacopdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
