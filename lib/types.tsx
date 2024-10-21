export interface MenusMenuItem {
  title: string;
  url: string;
  target?: string;
  parent?: any;
  root_menu: any;
}

export interface MenusMenuItemEntity {
  id?: number;
  attributes: MenusMenuItem;
}
