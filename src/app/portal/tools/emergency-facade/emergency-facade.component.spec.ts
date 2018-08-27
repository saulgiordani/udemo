import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyFacadeComponent } from './emergency-facade.component';

describe('EmergencyFacadeComponent', () => {
  let component: EmergencyFacadeComponent;
  let fixture: ComponentFixture<EmergencyFacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
