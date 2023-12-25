import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeriesComponent } from './surgeries.component';

describe('SurgeriesComponent', () => {
  let component: SurgeriesComponent;
  let fixture: ComponentFixture<SurgeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgeriesComponent]
    });
    fixture = TestBed.createComponent(SurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
