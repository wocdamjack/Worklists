
interface WorkItemCollection {
  WorkItems: WorkItem[];
}


export interface WorkItem {
  OrderDate: string;
  EstimatedTimeOfCompletion: string;
  AccessionNumber?: any;
  //OrderType: string;
  //PatientEncounterId: number;
  //PatientEncounterKey: string;
  PatientDischargeDate: string;
  PatientFirstName: string;
  PatientLastName: string;

  // AttendingPhysicianFirstName: string;
  // AttendingPhysicianLastName: string;
  // OrderingPhysicianFirstName: string;
  // OrderingPhysicianLastName: string;
}

export interface Lab {
  OrderName: string;
  OrderNumber?: any;
  SpecimenNumber: string;
  AccessionNumber?: any;
  OrderType: string;
  PatientEncounterId: number;
  PatientEncounterKey: string;
  PatientDischargeDate: string;
  PatientFirstName: string;
  PatientLastName: string;
  EstimatedTimeOfCompletion: string;
  AttendingPhysicianFirstName: string;
  AttendingPhysicianLastName: string;
  OrderingPhysicianFirstName: string;
  OrderingPhysicianLastName: string;
  OrderDate: string;
}
export interface Care {
  OrderName: string;
  OrderNumber: string;
  SpecimenNumber?: any;
  AccessionNumber?: any;
  OrderType: string;
  PatientEncounterId: number;
  PatientEncounterKey: string;
  PatientDischargeDate: string;
  PatientFirstName: string;
  PatientLastName: string;
  EstimatedTimeOfCompletion?: any;
  AttendingPhysicianFirstName: string;
  AttendingPhysicianLastName: string;
  OrderingPhysicianFirstName?: any;
  OrderingPhysicianLastName?: any;
  OrderDate?: any;
}

export interface Consult {
  OrderName: string;
  OrderNumber?: any;
  SpecimenNumber?: any;
  AccessionNumber?: any;
  OrderType: string;
  PatientEncounterId: number;
  PatientEncounterKey: string;
  PatientDischargeDate: string;
  PatientFirstName: string;
  PatientLastName: string;
  EstimatedTimeOfCompletion: string;
  AttendingPhysicianFirstName: string;
  AttendingPhysicianLastName: string;
  OrderingPhysicianFirstName: string;
  OrderingPhysicianLastName: string;
  OrderDate: string;
}
export interface Rad {
  OrderName: string;
  OrderNumber?: any;
  SpecimenNumber?: any;
  AccessionNumber?: any;
  OrderType: string;
  PatientEncounterId: number;
  PatientEncounterKey: string;
  PatientDischargeDate: string;
  PatientFirstName: string;
  PatientLastName: string;
  EstimatedTimeOfCompletion: string;
  AttendingPhysicianFirstName: string;
  AttendingPhysicianLastName: string;
  OrderingPhysicianFirstName: string;
  OrderingPhysicianLastName: string;
  OrderDate: string;
}
