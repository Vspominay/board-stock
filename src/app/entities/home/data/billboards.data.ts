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
      coordinates: [59, 63]
    },
    price: 220,
    title: 'Wings Tower',
    status: 'available',
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
      coordinates: [39, 45]
    },
    price: 271,
    title: 'Mill Sper House',
    status: 'available',
    type: [EBillboardType.Interactive]
  }
]
