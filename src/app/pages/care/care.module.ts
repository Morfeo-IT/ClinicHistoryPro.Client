import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareRoutingModule } from './care-routing.module';
import { PetientComponent } from './petient/petient.component'
import { ConsultationComponent } from './consultation/consultation.component';
import { AdmissionComponent } from './admission/admission.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UnconsciousPatientRecordComponent } from './unconscious-patient-record/unconscious-patient-record.component';

const components = [
  PetientComponent,
  ConsultationComponent,
  AdmissionComponent, UnconsciousPatientRecordComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    CareRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: components
})
export class CareModule { }
