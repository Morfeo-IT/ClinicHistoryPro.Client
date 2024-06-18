import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  protected _form: any = []
  protected formData: { [key: string]: any } = {}

  protected onClickCancel(): void {
    
  }
  
  protected onClickSave(): void {
    
  }
}
