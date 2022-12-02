import { EBillboardType } from '../enums/billboard-type.enum';

export interface IBillboard {
  id: string,
  mainImage: string,
  title: string,
  averageMonthViews?: number,
  views?: number,
  isFavorite?: boolean,
  price: number,
  status: 'available' | 'rented',
  address: {
    coordinates: number[],
    location: string
  },
  rate?: number,
  images: string[],
  type: EBillboardType[],
  startedRentDate?: Date,
  finishedRentDate?: Date,
  contactPhone?: string,
  contactEmail?: string
}
