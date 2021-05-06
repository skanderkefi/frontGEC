import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmsottndComponent } from './cmp3wmsottnd.component';

describe('Cmp3wmsottndComponent', () => {
  let component: Cmp3wmsottndComponent;
  let fixture: ComponentFixture<Cmp3wmsottndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmsottndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmsottndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
