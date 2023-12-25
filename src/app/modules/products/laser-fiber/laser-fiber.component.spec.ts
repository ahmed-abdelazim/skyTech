import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserFiberComponent } from './laser-fiber.component';

describe('LaserFiberComponent', () => {
  let component: LaserFiberComponent;
  let fixture: ComponentFixture<LaserFiberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaserFiberComponent]
    });
    fixture = TestBed.createComponent(LaserFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
