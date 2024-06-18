import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menuItemDTO';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  
  @Input() allMenuItems: MenuItem[] = [];

  haveChild(item: MenuItem): boolean {
    return item.inverseParentMenuItem.length > 0
  }

}
