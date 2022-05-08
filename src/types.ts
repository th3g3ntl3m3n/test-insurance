export interface CountryType {
  source: string;
  name: string;
  currency: string;
  rate: number;
}

export interface PackageType {
  name: string;
  extra: number;
}

export interface ItemType<Type> {
  [key: string]: Type;
}

export interface InitialFormType {
  name: "";
  age: "";
  country: "";
  package: "";
}
