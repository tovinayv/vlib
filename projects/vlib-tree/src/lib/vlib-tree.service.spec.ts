import { TestBed } from '@angular/core/testing';

import { VlibTreeService } from './vlib-tree.service';

describe('VlibTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VlibTreeService = TestBed.get(VlibTreeService);
    expect(service).toBeTruthy();
  });
});
