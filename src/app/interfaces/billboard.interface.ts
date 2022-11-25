export interface IBillboard {
  id: string,
  mainImage: string,
  title: string,
  isFavorite?: boolean,
  price: number,
  location: string,
  rate?: number,
  type: string
}
