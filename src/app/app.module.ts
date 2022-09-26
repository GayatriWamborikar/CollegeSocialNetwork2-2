
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from  'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { TestComponent } from './test/test.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { AddOfficeSectionComponent } from './add-OfficeSection/add-OfficeSection.component';
import { OfficeSectionListComponent } from './OfficeSection-list/OfficeSection-list.component';
import { FilterPipe } from './filter.pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    TestComponent,
    TexteditorComponent,
    OfficeSectionListComponent,
    AddOfficeSectionComponent,
    FilterPipe
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,

    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    DocumentEditorModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

