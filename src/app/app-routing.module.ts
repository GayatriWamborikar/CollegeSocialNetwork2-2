import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddOfficeSectionComponent } from './add-OfficeSection/add-OfficeSection.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfficeSectionListComponent } from './OfficeSection-list/OfficeSection-list.component';
import { TexteditorComponent } from './texteditor/texteditor.component';

const routes: Routes = [
  {path: ' ', component: HomeComponent},
  //{path: 'navbar', component:NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'addofficesection', component: AddOfficeSectionComponent},
  {path: 'officesectionlist', component: OfficeSectionListComponent},
  {path:'texteditor',component:TexteditorComponent},
  {path: 'contact', component: ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



