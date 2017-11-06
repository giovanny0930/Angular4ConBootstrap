import { TestBed, inject } from '@angular/core/testing';

import { PreventaDataService } from './preventa-data.service';

describe('PreventaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventaDataService]
    });
  });

  it('should be created', inject([PreventaDataService], (service: PreventaDataService) => {
    expect(service).toBeTruthy();
  }));
});
