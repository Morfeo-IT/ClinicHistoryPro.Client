import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {

  private windows = new BehaviorSubject<string[]>([]);
  windows$ = this.windows.asObservable();

  constructor(private router: Router) { }

  public openWindow(path: string) {
    const windowWidth = 600;
    const windowHeight = 400;

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    const url = this.router.serializeUrl(this.router.createUrlTree([`/${path}`]));
    const newWindow = window.open(url, '_blank', `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);
  
    // if (newWindow) {
    //   this.windowsService.openWindow(path);
    // }
    const currentWindows = this.windows.getValue();
    if (!currentWindows.includes(path)) {
      this.windows.next([...currentWindows, path]);
    }
  }

  public closeWindow(path: string) {
    const currentWindows = this.windows.getValue();
    this.windows.next(currentWindows.filter(window => window !== path));
  }
  
}
