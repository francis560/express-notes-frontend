import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCallMenuComponent } from './video-call-menu.component';

describe('VideoCallMenuComponent', () => {
  let component: VideoCallMenuComponent;
  let fixture: ComponentFixture<VideoCallMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCallMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCallMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
