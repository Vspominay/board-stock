import { IBillboard } from '../../../interfaces/billboard.interface';

const imagesPath = 'assets/images/welcome-page/'

export const BILLBOARDS: IBillboard[] = [
  {
    img: `${imagesPath}lego.jpg`,
    rate: 3.5,
    isFavorite: true,
    location: 'Jakarta, Indonesia',
    price: 220,
    title: 'Wings Tower',
    type: 'Digital'
  },
  {
    img: `${imagesPath}spoti.jpg`,
    rate: 5,
    isFavorite: false,
    location: 'Lviv, Ukraine',
    price: 271,
    title: 'Mill Sper House',
    type: 'Premium'
  }
]