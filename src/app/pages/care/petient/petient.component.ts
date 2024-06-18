import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-petient',
  templateUrl: './petient.component.html',
  styleUrls: ['./petient.component.css']
})
export class PetientComponent implements OnInit {

  protected formData: { [key: string]: any } = {}
  protected documentTypes: any[]
  protected genders: any[]
  protected bloodTypes: any[]
  protected cities: any[]
  protected states: any[]
  protected countries: any[]
  protected citiesLocalization: any[]
  protected statesLocalization: any[]
  protected countriesLocalization: any[]

  constructor(
    private httpService: HttpService
  ) {}

  async ngOnInit() {
    this.documentTypes = await this.GetManyDocumentType()
    this.genders = await this.GetManyGender()
    this.countries = await this.GetManyCountry()
    this.countriesLocalization = this.countries
  }

  private async GetManyDocumentType(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const result = this.httpService.Get("documentType/GetManyDocumentType", null)
      resolve(result)
    })
  }
  
  private async GetManyGender(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const result = this.httpService.Get("gender/GetManyGender", null)
      resolve(result)
    })
  }
  
  private async GetManyCountry(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const result = this.httpService.Get("localization/GetManyCountry", null)
      resolve(result)
    })
  }
  
  private async GetManyState(id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const result = await this.httpService.Get("localization/GetManyState", { country: id })
      resolve(result)
    })
  }
  
  private async GetManyCity(id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const result = await this.httpService.Get("localization/GetManyCity", { state: id })
      resolve(result)
    })
  }

  protected async OnChangeCountry(country: number): Promise<void> {
    this.states = await this.GetManyState(country)
  }
  
  protected async OnChangeState(state: number): Promise<void> {
    this.cities = await this.GetManyCity(state)
  }

  protected async OnChangeCountryLocalization(country: number): Promise<void> {
    this.statesLocalization = await this.GetManyState(country)
  }
  
  protected async OnChangeStateLocalization(state: number): Promise<void> {
    this.citiesLocalization = await this.GetManyCity(state)
  }


  protected onClickCancel(): void {
    
  }
  
  protected async onClickSave(): Promise<void> {
    const result = await this.httpService.Post("patient/CreateOnePatient", { patient: this.formData })
  }
  
}
