import { TestBed } from '@angular/core/testing';

import { ProjectServiceService } from './project-data.service';

describe('ProjectDataService', () => {
  let service: ProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
