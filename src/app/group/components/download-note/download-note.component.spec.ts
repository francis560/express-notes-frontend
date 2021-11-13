import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadNoteComponent } from './download-note.component';

describe('DownloadNoteComponent', () => {
  let component: DownloadNoteComponent;
  let fixture: ComponentFixture<DownloadNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
