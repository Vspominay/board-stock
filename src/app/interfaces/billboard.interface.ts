import { EBillboardType } from '../enums/billboard-type.enum';
import { ICoordinates } from './coordinates.interface';

export interface IBillboard {
  id: string,
  mainImage: string,
  title: string,
  isFavorite?: boolean,
  price: number,
  address: {
    coords: ICoordinates,
    location: string
  },
  rate?: number,
  images: string[],
  type: EBillboardType[]
}
