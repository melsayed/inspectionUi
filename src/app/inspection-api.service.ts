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
}
