import { TestBed } from "@angular/core/testing";
import { OfficeSectionService } from './OfficeSection.service';

describe('OfficeSectionService', () => {
    let service: OfficeSectionService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(OfficeSectionService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
  