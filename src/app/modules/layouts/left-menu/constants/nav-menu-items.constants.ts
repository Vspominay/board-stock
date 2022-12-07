import { IMenuItem } from "../interfaces/menu-item";

export const NAV_MENU_ITEMS: IMenuItem[] = [
  {
    icon: 'ic-dashboard',
    routerLink: 'dashboard',
    tooltip: 'titles.yourBillboards'
  },
  {
    icon: 'ic-search',
    routerLink: 'available-boards',
    tooltip: 'titles.availableBillboards'
  },
  {
    icon: 'ic-settings',
    routerLink: 'settings',
    tooltip: 'titles.settings'
  },
]