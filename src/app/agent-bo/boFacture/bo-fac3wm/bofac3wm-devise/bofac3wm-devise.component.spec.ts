import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bofac3wmDeviseComponent } from './bofac3wm-devise.component';

describe('Bofac3wmDeviseComponent', () => {
  let component: Bofac3wmDeviseComponent;
  let fixture: ComponentFixture<Bofac3wmDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bofac3wmDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bofac3wmDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
