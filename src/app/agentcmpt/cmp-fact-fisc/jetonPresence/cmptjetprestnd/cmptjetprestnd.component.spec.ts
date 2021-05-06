import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptjetprestndComponent } from './cmptjetprestnd.component';

describe('CmptjetprestndComponent', () => {
  let component: CmptjetprestndComponent;
  let fixture: ComponentFixture<CmptjetprestndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmptjetprestndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptjetprestndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
