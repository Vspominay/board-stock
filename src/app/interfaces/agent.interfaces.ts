export interface IBaseUser {
  id: number,
  img: string,
  name: string
}

export interface IAgent extends IBaseUser {
  rate: number,
  topRate: number,
  totalBillboards: number
}