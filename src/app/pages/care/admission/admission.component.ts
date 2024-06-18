import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  protected formData: { [key: string]: any } = {}
  protected administrators : any[]

  constructor(private httpService: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.administrators = await this.GetManyAdministrator()
  }

  private async GetManyAdministrator(): Promise<any> {
    return new Promise(async (resolve, reejct) => {
      const result = await this.httpService.Get("Administrator/GetManyAdministrator", null)
      resolve(result)
    })
  }

  protected onClickCancel(): void {
    
  }
  
  protected onClickSave(): void {
    
  }
  
}
