import { TestBed, inject } from '@angular/core/testing';

import { ColorEventsService } from './color-events.service';

describe('ColorEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorEventsService]
    });
  });

  it('should be created', inject([ColorEventsService], (service: ColorEventsService) => {
    expect(service).toBeTruthy();
  }));
});
