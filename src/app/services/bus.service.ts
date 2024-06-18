import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BusDTO } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private bus = new BehaviorSubject<BusDTO>(new BusDTO())
  public bus$ = this.bus.asObservable();

  constructor() { }

  public setData(bus: BusDTO): void {
    this.bus.next(bus)
  }

}
