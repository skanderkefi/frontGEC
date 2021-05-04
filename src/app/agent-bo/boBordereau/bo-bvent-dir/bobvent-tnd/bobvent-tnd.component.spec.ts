import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobventTndComponent } from './bobvent-tnd.component';

describe('BobventTndComponent', () => {
  let component: BobventTndComponent;
  let fixture: ComponentFixture<BobventTndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobventTndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobventTndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
