import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  private messageSubject = new Subject<any>();

  constructor() {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'customMessage') {
        this.messageSubject.next(event.data.payload);
      }
    });
  }

  sendMessage(data: any, targetWindow: Window): void {
    targetWindow.postMessage({ type: 'customMessage', payload: data }, window.location.origin);
  }

  receiveMessages(): Observable<any> {
    return this.messageSubject.asObservable();
  }

}
