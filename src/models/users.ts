export interface Location {
  lat: number;
  lng: number;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: Location;
}

export interface CompanyData {
  name: string;
  catchPhrase?: string;
  bs?: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  address?: UserAddress;
  phone?: string;
  website?: string;
  company?: CompanyData;
}
