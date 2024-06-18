import { Component, OnInit } from '@angular/core';
import { WindowsService } from '../services/windows.service';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MenuItem } from '../models/menuItemDTO';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit{

  private otherWindow: Window | null = null;
  protected menuItems: MenuItem[] = []

  constructor(
    private httpService: HttpService,
    private windowsService: WindowsService,
    private localStorageService: LocalStorageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.menuItems = await this.GetManyProccess()
  }

  public async GetManyProccess(): Promise<MenuItem[]> {
    return new Promise(async (resolve, reject) => {
      const result = await this.httpService.Get("MenuItem/GetManyMenuItem", null)
      resolve(result)
    })
  }

  openWindow(resource: any) {
    this.localStorageService.SetLocalStorage(`/${resource.url}`, resource.formId)
    this.windowsService.openWindow(resource.url)
  }

}
