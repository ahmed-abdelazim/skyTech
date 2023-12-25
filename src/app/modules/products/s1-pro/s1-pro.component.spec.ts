import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1ProComponent } from './s1-pro.component';

describe('S1ProComponent', () => {
  let component: S1ProComponent;
  let fixture: ComponentFixture<S1ProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S1ProComponent]
    });
    fixture = TestBed.createComponent(S1ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
