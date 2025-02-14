/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreakfastService } from './breakfast.service';

describe('Service: Breakfast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakfastService]
    });
  });

  it('should ...', inject([BreakfastService], (service: BreakfastService) => {
    expect(service).toBeTruthy();
  }));
});
