import { EBillboardStatus } from '../enums/billboard-status.enum';
import { IBillboard } from './billboard.interface';

export interface IBillboardStatus {
  id: string,
  isFavorite: boolean,
  contactPhone?: string,
  contactEmail?: string,
  status: EBillboardStatus,
  user: string,
  billboard: IBillboard
}
