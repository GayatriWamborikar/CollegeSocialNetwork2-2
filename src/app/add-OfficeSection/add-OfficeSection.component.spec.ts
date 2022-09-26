import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddOfficeSectionComponent } from './add-OfficeSection.component';





describe('AddOfficeSectionComponent', () => {

  let component: AddOfficeSectionComponent;

  let fixture: ComponentFixture<AddOfficeSectionComponent>;



  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ AddOfficeSectionComponent ]

    })

    .compileComponents();

  });



  beforeEach(() => {

    fixture = TestBed.createComponent(AddOfficeSectionComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });

});