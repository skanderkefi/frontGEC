import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordstegdeviseComponent } from './bobordstegdevise.component';

describe('BobordstegdeviseComponent', () => {
  let component: BobordstegdeviseComponent;
  let fixture: ComponentFixture<BobordstegdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordstegdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordstegdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
