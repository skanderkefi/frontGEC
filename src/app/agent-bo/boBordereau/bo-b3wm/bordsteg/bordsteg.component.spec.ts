import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordstegComponent } from './bordsteg.component';

describe('BordstegComponent', () => {
  let component: BordstegComponent;
  let fixture: ComponentFixture<BordstegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordstegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordstegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
