import { EBillboardType } from '../../../enums/billboard-type.enum';
import { IBillboard } from '../../../interfaces/billboard.interface';

const imagesPath = 'assets/images/welcome-page/'

export const BILLBOARDS: IBillboard[] = [
  {
    id: '1',
    mainImage: `${imagesPath}lego.jpg`,
    rate: 3.5,
    isFavorite: true,
    images: [],
    address: {
      location: 'Jakarta, Indonesia',
      coords: {
        lng: 50,
        lat: 39
      }
    },
    price: 220,
    title: 'Wings Tower',
    type: [EBillboardType.Mobile]
  },
  {
    id: '2',
    mainImage: `${imagesPath}spoti.jpg`,
    rate: 5,
    isFavorite: false,
    images: [],
    address: {
      location: 'Lviv, Ukraine',
      coords: {
        lng: 50,
        lat: 39
      }
    },
    price: 271,
    title: 'Mill Sper House',
    type: [EBillboardType.Interactive]
  }
]
