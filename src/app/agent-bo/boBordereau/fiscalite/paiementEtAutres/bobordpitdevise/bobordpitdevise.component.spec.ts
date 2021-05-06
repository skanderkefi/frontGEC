import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobordpeadeviseComponent } from './bobordpitdevise.component';
 
describe('BobordpeadeviseComponent', () => {
  let component: BobordpeadeviseComponent;
  let fixture: ComponentFixture<BobordpeadeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobordpeadeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobordpeadeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
