import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetientComponent } from './petient/petient.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AdmissionComponent } from './admission/admission.component';
import { UnconsciousPatientRecordComponent } from './unconscious-patient-record/unconscious-patient-record.component';

const routes: Routes = [
  { path: 'HospitalAdmission/PatientRegistry/NewPatient', component: PetientComponent },
  { path: 'MedicalHistory/RegisterNewDiagnosticConsultation', component: ConsultationComponent },
  { path: 'MedicalHistory/RegisterIncome', component: AdmissionComponent },
  { path: 'MedicalHistory/UnconsciousPatientRecord', component: UnconsciousPatientRecordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareRoutingModule { }
