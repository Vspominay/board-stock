import { IBaseUser } from '../../../interfaces/agent.interfaces';

export interface IUserProfile extends IBaseUser {
  email: string,
  surname: string,
  activeBillboards: number,
  archivedBillboards: number,
  rentOutBillboards: number
}