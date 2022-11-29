import { EBillboardType } from '../enums/billboard-type.enum';

export interface IBillboard {
  id: string,
  mainImage: string,
  title: string,
  averageMonthViews?: number,
  views?: number,
  isFavorite?: boolean,
  price: number,
  address: {
    coordinates: number[],
    location: string
  },
  rate?: number,
  images: string[],
  type: EBillboardType[]
}
