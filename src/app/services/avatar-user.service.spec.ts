import { TestBed } from '@angular/core/testing';

import { AvatarUserService } from './avatar-user.service';

describe('AvatarUserService', () => {
  let service: AvatarUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
