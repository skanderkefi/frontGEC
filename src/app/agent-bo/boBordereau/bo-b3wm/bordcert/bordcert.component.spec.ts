import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordcertComponent } from './bordcert.component';

describe('BordcertComponent', () => {
  let component: BordcertComponent;
  let fixture: ComponentFixture<BordcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
