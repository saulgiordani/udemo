import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRequest1Component } from './mobile-request1.component';

describe('MobileRequest1Component', () => {
  let component: MobileRequest1Component;
  let fixture: ComponentFixture<MobileRequest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRequest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRequest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
