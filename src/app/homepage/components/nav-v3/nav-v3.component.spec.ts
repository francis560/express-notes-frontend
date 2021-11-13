import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavV3Component } from './nav-v3.component';

describe('NavV3Component', () => {
  let component: NavV3Component;
  let fixture: ComponentFixture<NavV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
