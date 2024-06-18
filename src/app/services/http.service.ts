import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private setParams(params: any): any {
    let httpParams = new HttpParams()
    for (let key in params) {
      if (params.hasOwnProperty(key)) httpParams = httpParams.set(key, params[key])
    }
  return httpParams
  }

  public async Get(url: string, params: any): Promise<any> {
    try 
    {
      const response = await this.http.get<any>(`https://localhost:7237/api/${url}`, { params: this.setParams(params) }).toPromise()
      return response.result
    } 
    catch (error) 
    {
      console.error(error)
      throw error
    }
  }

  public async Post(url: string, params: any): Promise<any> {
    try 
    {
      const response = await this.http.post<any>(`https://localhost:7237/api/${url}`, params).toPromise()
      return response.result  
    } 
    catch (error) 
    {
      console.error(error)
      throw error
    }
  }
}
