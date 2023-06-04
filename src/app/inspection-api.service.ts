import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  constructor(private http: HttpClient) { }

  getInspectionList():Observable<any[]>{
    console.log(environment.inpectionURL);
    return this.http.get<any>(environment.inpectionURL+'/inspections');
  }

  addInspection(data:any) {
    return this.http.post(environment.inpectionURL + '/inspections', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(environment.inpectionURL + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string) {
    return this.http.delete(environment.inpectionURL + `/inspections/${id}`);
  }
  // Inspection Types
  getInspectionTypesList():Observable<any[]> {
    return this.http.get<any>(environment.inpectionURL + '/inspectionTypes');
  }

  addInspectionTypes(data:any) {
    return this.http.post(environment.inpectionURL + '/inspectionTypes', data);
  }

  updateInspectionTypes(id:number|string, data:any) {
    return this.http.put(environment.inpectionURL + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id:number|string) {
    return this.http.delete(environment.inpectionURL + `/inspectionTypes/${id}`);
  }

  // Statuses
  getStatusList():Observable<any[]> {
    return this.http.get<any>(environment.inpectionURL + '/status');
  }

  addStatus(data:any) {
    return this.http.post(environment.inpectionURL + '/status', data);
  }

  updateStatus(id:number|string, data:any) {
    return this.http.put(environment.inpectionURL + `/status/${id}`, data);
  }

  deleteStatus(id:number|string) {
    return this.http.delete(environment.inpectionURL + `/status/${id}`);
  }
}
