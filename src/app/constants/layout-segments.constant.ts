import { ISegmentItem } from '../shared/components/layout-switch/interfaces/segmant-item';

const iconsPath = 'assets/icons/';

export const LAYOUT_SEGMENT: ISegmentItem[] = [
  {
    text: '',
    icon: `${iconsPath}vertical.svg`,
    activeIcon: `${iconsPath}vertical-active.svg`,
    value: 'vertical',
  }, {
    text: '',
    icon: `${iconsPath}horizontal.svg`,
    activeIcon: `${iconsPath}horizontal-active.svg`,
    value: 'horizontal',
  },
];