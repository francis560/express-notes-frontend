import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavV4Component } from './nav-v4.component';

describe('NavV4Component', () => {
  let component: NavV4Component;
  let fixture: ComponentFixture<NavV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavV4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
