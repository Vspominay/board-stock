import { IBaseUser } from '../../../interfaces/agent.interfaces';
import { INotification } from '../../notifications/interfaces/notification.interface';

export interface IUserProfile extends IBaseUser {
  email: string,
  surname: string,
  activeBillboards: number,
  archivedBillboards: number,
  rentOutBillboards: number,
  phone: string
  notifications: INotification[]
}
