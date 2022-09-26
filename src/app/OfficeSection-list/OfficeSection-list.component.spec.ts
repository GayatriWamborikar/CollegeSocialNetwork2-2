import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OfficeSectionListComponent } from "./OfficeSection-list.component";


describe('OfficeSectionListComponent', () => {
    let component: OfficeSectionListComponent;
    let fixture: ComponentFixture<OfficeSectionListComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ OfficeSectionListComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(OfficeSectionListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  