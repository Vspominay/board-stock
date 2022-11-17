export interface IBillboard {
  img: string,
  title: string,
  isFavorite?: boolean,
  price: number,
  location: string,
  rate?: number,
  type: string
}