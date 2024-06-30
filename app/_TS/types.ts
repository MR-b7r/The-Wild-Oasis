export interface ICabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}
export interface IBooking {
  id: number;
  guestID: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests?: number;
  status?: string;
  created_at?: string;
  cabins?: { name: string; image: string };
}
export interface IReservationBooking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  guestID: number;
  cabinID: number;
  cabins: CabinsBooking;
}

export interface CabinsBooking {
  name: string;
  image: string;
}

export interface ICountry {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
}
export interface IUserAuth {
  name: string;
  email: string;
  image: string;
  guestID: number;
}

export interface IGuest {
  id: number;
  created_at?: string;
  fullName?: string;
  email?: string;
  nationalID?: string;
  countryFlag?: string;
  nationality?: string;
}

export type TParams = {
  searchParams: { [key: string]: string | undefined };
};

declare interface UserSignIn {
  id: string;
  name: string;
  email: string;
  image: string;
}

declare interface AccountSignIn {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  id_token: string;
  expires_at: number;
  provider: "google" | string;
  type: string;
  providerAccountId: string;
}

declare interface profileSignIn {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
}

declare interface GoogleSignIn {
  user: UserSignIn;
  account: AccountSignIn;
  profile: profileSignIn;
}
