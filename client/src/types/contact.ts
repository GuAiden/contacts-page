export type GeoLocation = {
  lat: string;
  lng: string;
}
export type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoLocation
}
export type Company = {
  name: string,
  catchPhrase: string,
  bs: string
}
export type Contact = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}
