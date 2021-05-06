import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3wmsotdeviseComponent } from './cmp3wmsotdevise.component';

describe('Cmp3wmsotdeviseComponent', () => {
  let component: Cmp3wmsotdeviseComponent;
  let fixture: ComponentFixture<Cmp3wmsotdeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmp3wmsotdeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp3wmsotdeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
