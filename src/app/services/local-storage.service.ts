import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public SetLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  public GetLocalStorage(key: string): any {
    return localStorage.getItem(key)
  }

  public RemoveLocalStorage(key: string): void {
    localStorage.removeItem(key)
  }

}
