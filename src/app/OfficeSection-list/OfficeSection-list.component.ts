import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OfficeSection } from "../OfficeSection";
import { OfficeSectionService } from "../service/OfficeSection.service";

@Component({
    selector: 'app-officeSection-list',
    templateUrl: './officeSection-list.component.html',
    styleUrls: ['./officeSection-list.component.css']
  })
  export class OfficeSectionListComponent implements OnInit {
  
    constructor(
      
      private officeSectionService: OfficeSectionService,
      private router: Router
      // private readService:UploadFileService
    ) {}
  
    officeSection: OfficeSection[] = [];
    nameSearch: string = '';
    
  
    ngOnInit(): void {
      this.getOfficeSectionsList();console.log("hi")
    }
  
   
    private getOfficeSectionsList() {
      this.officeSectionService.getOfficeSectionsList().subscribe((data) => {
        this.officeSection = data;
        // this.router.navigate(['uploadedofficeSectionlist']);
      });
    }
    update(){
  
      this.router.navigate(['']);
  
    }
    delete(){
  
      this.router.navigate(['']);
  
    }
  
  
  }