import { TestBed } from '@angular/core/testing';

import { InfoChatsService } from './info-chats.service';

describe('InfoChatsService', () => {
  let service: InfoChatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoChatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
