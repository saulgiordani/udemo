import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRequest3Component } from './mobile-request3.component';

describe('MobileRequest3Component', () => {
  let component: MobileRequest3Component;
  let fixture: ComponentFixture<MobileRequest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRequest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRequest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
