import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFactVentDirComponent } from './bo-fact-vent-dir.component';

describe('BoFactVentDirComponent', () => {
  let component: BoFactVentDirComponent;
  let fixture: ComponentFixture<BoFactVentDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoFactVentDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFactVentDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
