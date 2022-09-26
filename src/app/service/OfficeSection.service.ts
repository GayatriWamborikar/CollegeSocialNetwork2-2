import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { OfficeSection } from "../OfficeSection";

@Injectable({
    providedIn: 'root'
  })
  export class OfficeSectionService {
  
    
    constructor(private httpClient: HttpClient) {}
  
    getOfficeSectionsList(): Observable<OfficeSection[]> {
      return this.httpClient.get<OfficeSection[]>(
        'http://localhost:8082/officeSections'
      );
    }
    addOfficeSection(officeSection: OfficeSection): Observable<OfficeSection> {
      return this.httpClient.post<OfficeSection>(
        'http://localhost:8082/officeSection',officeSection
      ).pipe(catchError(this.handleError));
    }
    getOfficeSectionById(officeId: number): Observable<OfficeSection> {
      return this.httpClient.get<OfficeSection>(
        'http://localhost:8082/officeSection/' + officeId
      );
    }
    updateOfficeSection(officeId: number, admin: OfficeSection): Observable<Object> {
      return this.httpClient.put(
        'http://localhost:8082/officeSection' + officeId,
      admin
      );
    }
  
    deleteOfficeSection(officeId: number): Observable<Object> {
      return this.httpClient.delete(
        'http://localhost:8082/officeSection/' + OfficeSection
      );
    }
  
    handleError(error: HttpErrorResponse) {
  
      if (error.status === 0) {
  
       // A client-side or network error occurred. Handle it accordingly.
  
       console.error('An error occurred:', error.error);
  
     } else {
  
       // The backend returned an unsuccessful response code.
  
       // The response body may contain clues as to what went wrong.
  
       console.error(
  
         `Backend returned code ${error.status}, body was: `, error.error);
  
     }
  
     // Return an observable with a user-facing error message.
  
     return throwError(() => new Error('Something bad happened; please try again later.'));
  
   }
  }
  