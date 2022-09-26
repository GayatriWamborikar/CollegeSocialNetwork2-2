import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OfficeSection } from '../OfficeSection';
import { OfficeSectionService } from '../service/OfficeSection.service';




@Component({
  selector: 'app-add-officeSection',
  templateUrl: './add-officeSection.component.html',
  styleUrls: ['./add-officeSection.component.css']

})

export class AddOfficeSectionComponent implements OnInit {

   addOfficeSection1: OfficeSection = new OfficeSection();
  constructor(
    private officeSectionService: OfficeSectionService,
    private router: Router

  ) {}

  ngOnInit(): void {}

  saveOfficeSection() {
    this.officeSectionService.addOfficeSection(this.addOfficeSection1).subscribe(
      (data) => {
        console.log(data);
        Swal.fire(
          "",
          'OfficeSection is created successfully',
            'success'    

         )
         alert("OfficeSection added ")

        // this.goToOfficeSectionList();

        this.router.navigate(['/officeSectionlist']);

    },

  //  (error) => console.log(error)

  );

}



goToOfficeSectionList(): void {

  this.router.navigate(['/officeSectionlist']);

}



onSubmit() {

  console.log(this.addOfficeSection1);

//  alert('OfficeSection added successfully');

  this.saveOfficeSection();

  // this.goToOfficeSectionsList();

}
    
    
}