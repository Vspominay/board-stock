export interface IBaseUser {
  id: string,
  photo: string,
  name: string
}

export interface IAgent extends IBaseUser {
  rate: number,
  topRate: number,
  totalBillboards: number
}
