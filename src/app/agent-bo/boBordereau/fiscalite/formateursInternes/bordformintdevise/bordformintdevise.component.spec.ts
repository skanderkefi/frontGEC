import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordformintdeviseComponent } from './bordformintdevise.component';

describe('BordformintdeviseComponent', () => {
  let component: BordformintdeviseComponent;
  let fixture: ComponentFixture<BordformintdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordformintdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordformintdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
