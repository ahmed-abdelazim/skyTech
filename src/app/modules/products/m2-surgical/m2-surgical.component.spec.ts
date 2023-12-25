import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2SurgicalComponent } from './m2-surgical.component';

describe('M2SurgicalComponent', () => {
  let component: M2SurgicalComponent;
  let fixture: ComponentFixture<M2SurgicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [M2SurgicalComponent]
    });
    fixture = TestBed.createComponent(M2SurgicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
