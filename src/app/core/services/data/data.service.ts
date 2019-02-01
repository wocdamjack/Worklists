import { Injectable } from '@angular/core';

import { WorkItem } from '../../models/interfaces';

import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*

*/
export class DataService {
  constructor(private http: HttpClient) {}

    // // URLs..
    // private getCare() {
    //   return environment.WorklistsApi + '/api/WorkList?filter=PatientDischargeDates$Today&workListType=CARE' ;     
    // }
    // private getConsults() {
    //   return environment.WorklistsApi + '/api/WorkList?filter=PatientDischargeDates$Today&workListType=CONSULTS'    
    // }
    // private getLab() {
    //   return environment.WorklistsApi + '/api/WorkList?filter=PatientDischargeDates$Today&workListType=LAB';

    // }
    // private getRad() {
    //   return environment.WorklistsApi + '/api/WorkList?filter=PatientDischargeDates$Today&workListType=RAD';

    // }


  public getWorkItems(type: string): Observable<WorkItem[]> {
    let _url = environment.WorklistsApi + '/api/WorkList?filter=PatientDischargeDates$Today$Tomorrow&now=2018-12-19+11:00:51&option=&pageNumber=1&pageSize=20&sort=PatientDischargeDate$ASC&workListType='+type;

    return this.http.get<WorkItem[]>(_url, {}).pipe(
      map(r => {
        console.log(r)
        return r || [];
      })
    );

  }

}
/*
Request:
    /api/WorkList?filter=PatientDischargeDates$Today$Tomorrow&now=2018-12-18+11:41:51&option=&pageNumber=1&pageSize=20&sort=PatientDischargeDate$ASC&workListType=LAB

Response:
{
    "WorkItems": [
        {
            "OrderName": "TROPT.LAB",
            "OrderNumber": null,
            "SpecimenNumber": "1217:C00259T",
            "AccessionNumber": null,
            "OrderType": "CHEM.LAB",
            "PatientEncounterId": 2165813,
            "PatientEncounterKey": "CA0050423268",
            "PatientDischargeDate": "2018-12-18T00:00:00",
            "PatientFirstName": "ALAN",
            "PatientLastName": "BLOOM",
            "EstimatedTimeOfCompletion": "2018-12-17T02:07:00",
            "AttendingPhysicianFirstName": "Jinesh",
            "AttendingPhysicianLastName": "Kochar",
            "OrderingPhysicianFirstName": "Melody",
            "OrderingPhysicianLastName": "Sillo",
            "OrderDate": "2018-12-16T19:34:05"
        },
    ],
    "PageNumber": 1,
    "PageSize": 20,
    "TotalPages": 26,
    "TotalRows": 502
}

CARE
https://worklistsapidev.stewardappsuite.com/api/WorkList?filter=PatientDischargeDates$Today$Tomorrow
&now=2018-12-18+13:27:05&option=&pageNumber=1&pageSize=20&sort=PatientDischargeDate$ASC&workListType=Care

{"WorkItems":[{"OrderName":"TOXIC ENCEPHALOPATHY","OrderNumber":"IMO-PROB-24285718_E00055157630",
"SpecimenNumber":null,"AccessionNumber":null,"OrderType":"MCC","PatientEncounterId":2162429,
"PatientEncounterKey":"E00055157630","PatientDischargeDate":"2018-12-18T00:00:00","PatientFirstName":
"EDWARD","PatientLastName":"POWER","EstimatedTimeOfCompletion":null,"AttendingPhysicianFirstName":
"James","AttendingPhysicianLastName":"Whynot","OrderingPhysicianFirstName":null,
"OrderingPhysicianLastName":null,"OrderDate":null},

{"OrderName":"ACUTE ON CHRONIC DIASTOLIC (CONGESTIVE) HEART FAILURE",
"OrderNumber":"IMO-PROB-25707470_E00055123681",
"SpecimenNumber":null,
"AccessionNumber":null,
"OrderType":"MCC",
"PatientEncounterId":2150119,
"PatientEncounterKey":"E00055123681",
"PatientDischargeDate":"2018-12-19T00:00:00",
"PatientFirstName":"GRACE",
"PatientLastName":"BARBATO",
"EstimatedTimeOfCompletion":null,
"AttendingPhysicianFirstName":"Uyen",
"AttendingPhysicianLastName":"Lam",
"OrderingPhysicianFirstName":null,
"OrderingPhysicianLastName":null,
"OrderDate":null}

],"PageNumber":1,"PageSize":20,"TotalPages":1,"TotalRows":2}

CONSULTS
https://worklistsapidev.stewardappsuite.com/api/WorkList?filter=PatientDischargeDates$Today$Tomorrow
&now=2018-12-18+13:39:38&option=&pageNumber=1&pageSize=20&sort=PatientDischargeDate$ASC&workListType=Consults
{
    "WorkItems": [
        {
            "OrderName": "Discharge Order",
            "OrderNumber": null,
            "SpecimenNumber": null,
            "AccessionNumber": null,
            "OrderType": "Discharge Summary",
            "PatientEncounterId": 2167420,
            "PatientEncounterKey": "E00054693205",
            "PatientDischargeDate": "2018-12-18T00:00:00",
            "PatientFirstName": "RAFAEL",
            "PatientLastName": "CACERES",
            "EstimatedTimeOfCompletion": "2018-12-19T10:50:00",
            "AttendingPhysicianFirstName": "David",
            "AttendingPhysicianLastName": "Staskin",
            "OrderingPhysicianFirstName": "Allison",
            "OrderingPhysicianLastName": "White",
            "OrderDate": "2018-12-18T10:50:00"
        },
        {
            "OrderName": "Discharge Order",
            "OrderNumber": null,
            "SpecimenNumber": null,
            "AccessionNumber": null,
            "OrderType": "Discharge Summary",
            "PatientEncounterId": 2167406,
            "PatientEncounterKey": "E00054872205",
            "PatientDischargeDate": "2018-12-18T00:00:00",
            "PatientFirstName": "WILL",
            "PatientLastName": "IAM",
            "EstimatedTimeOfCompletion": "2018-12-19T08:14:24",
            "AttendingPhysicianFirstName": "Ingolf",
            "AttendingPhysicianLastName": "Tuerk",
            "OrderingPhysicianFirstName": "Allison",
            "OrderingPhysicianLastName": "White",
            "OrderDate": "2018-12-18T08:14:24"
        },
    ],
    "PageNumber": 1,
    "PageSize": 20,
    "TotalPages": 4,
    "TotalRows": 62
}

RAD
https://worklistsapidev.stewardappsuite.com/api/WorkList?filter=PatientDischargeDates$Today$Tomorrow
&now=2018-12-18+13:43:44&option=&pageNumber=1&pageSize=20&sort=PatientDischargeDate$ASC&workListType=RAD

{
    "WorkItems": [
        {
            "OrderName": "HPEL1VRTP",
            "OrderNumber": null,
            "SpecimenNumber": null,
            "AccessionNumber": null,
            "OrderType": "XR",
            "PatientEncounterId": 1647686,
            "PatientEncounterKey": "CA0045599487",
            "PatientDischargeDate": "2018-12-18T00:00:00",
            "PatientFirstName": "JEANMICHEL",
            "PatientLastName": "JEAN MICHEL",
            "EstimatedTimeOfCompletion": "2018-09-02T09:09:00",
            "AttendingPhysicianFirstName": "Jinesh",
            "AttendingPhysicianLastName": "Kochar",
            "OrderingPhysicianFirstName": "Laura",
            "OrderingPhysicianLastName": "Robotham",
            "OrderDate": "2018-09-01T18:09:00"
        }
    ],
    "PageNumber": 1,
    "PageSize": 20,
    "TotalPages": 142,
    "TotalRows": 2838
}
*/
