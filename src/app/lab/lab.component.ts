import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/core/services';
import { WorkItem } from '@app/core/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  public care$: Observable<WorkItem[]>;
  public consult$: Observable<WorkItem[]>;
  public lab$: Observable<WorkItem[]>;
  public rad$: Observable<WorkItem[]>;
  

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.care$ = this.dataService.getWorkItems('CARE');
    this.consult$ = this.dataService.getWorkItems('CONSULT');
    this.lab$ = this.dataService.getWorkItems('LAB');
    this.rad$ = this.dataService.getWorkItems('RAD');
  }
}
