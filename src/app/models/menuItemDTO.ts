export interface MenuItem {
    menuItemId: number;
    parentMenuItemId: number | null;
    name: string;
    url: string | null;
    displayOrder: number;
    guidId: string;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    parentMenuItem: MenuItem | null;
    inverseParentMenuItem: MenuItem[];
  }