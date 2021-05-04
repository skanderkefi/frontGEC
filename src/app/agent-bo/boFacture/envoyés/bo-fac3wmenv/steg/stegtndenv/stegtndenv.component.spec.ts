import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StegtndenvComponent } from './stegtndenv.component';

describe('StegtndenvComponent', () => {
  let component: StegtndenvComponent;
  let fixture: ComponentFixture<StegtndenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StegtndenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StegtndenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
