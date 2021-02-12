import { TestBed } from '@angular/core/testing';

import { CatfactsService } from './catfacts.service';

describe('CatfactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatfactsService = TestBed.get(CatfactsService);
    expect(service).toBeTruthy();
  });
});
