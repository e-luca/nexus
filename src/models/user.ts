export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  address: UserAddress;
  university: string;
  company: UserCompany;
}

interface UserAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
}

interface UserCompany {
  department: string;
  name: string;
  title: string;
  address: UserAddress;
}
