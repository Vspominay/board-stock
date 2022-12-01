import { IBaseUser } from '../../../interfaces/agent.interfaces';
import { IBillboardStatus } from '../../../interfaces/billboard-status.interface';
import { INotification } from '../../notifications/interfaces/notification.interface';

export interface IUserProfile extends IBaseUser {
  email: string,
  surname: string,
  phone: string
  billboards: IBillboardStatus[],
  notifications: INotification[]
}
