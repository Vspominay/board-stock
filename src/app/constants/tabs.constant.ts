import { ITab } from '../modules/layouts/tabs/interfaces/tab.interface';

const iconsRoute = 'assets/icons/';

export const TABS: ITab[] = [
  {
    route: 'home',
    icon: `${iconsRoute}home.svg`,
    activeIcon: `${iconsRoute}home-fill.svg`,
    isActive: false
  },
  {
    route: 'boards',
    icon: `${iconsRoute}zoom.svg`,
    isActive: false
  },
  {
    route: 'favorite',
    icon: `${iconsRoute}heart.svg`,
    activeIcon: `${iconsRoute}heart-fill.svg`,
    isActive: false
  },
  {
    route: 'profile',
    icon: `${iconsRoute}profile.svg`,
    activeIcon: `${iconsRoute}profile-fill.svg`,
    isActive: false
  }
]