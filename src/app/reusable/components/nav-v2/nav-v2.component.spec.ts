import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavV2Component } from './nav-v2.component';

describe('NavV2Component', () => {
  let component: NavV2Component;
  let fixture: ComponentFixture<NavV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
