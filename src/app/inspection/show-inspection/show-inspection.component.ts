import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service'

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any = [];

  inspectionsTypesMap: Map<number, string> = new Map();

  constructor(private service: InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    this.refreshInspectionsTypesMap();
    console.log(this.inspectionsTypesMap);
    this.inspectionList$ = this.service.getInspectionList();
  }

  ModalTitle: string = "";
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;

  ModelAdd() {
    this.ModalTitle = "Add Inspection";
    this.activateAddEditInspectionComponent = true;
    this.inspection = {
      id: 0,
      inspectionTypeId: null,
      status: null,
      comments: null
    }
  }

  refreshInspectionsTypesMap() {
    this.service.getInspectionTypesList().subscribe(data => {
      this.inspectionTypesList = data;
      for (let index = 0; index < this.inspectionTypesList.length; index++) {
        this.inspectionsTypesMap.set(this.inspectionTypesList[index].id, this.inspectionTypesList[index].name);
      }
    });
  }
}
