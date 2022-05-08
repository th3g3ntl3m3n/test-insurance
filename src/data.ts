import USLogo from "./Images/usa.png";
import HongKongLogo from "./Images/hkg.png";
import AusLogo from "./Images/aus.png";
import { CountryType, ItemType, PackageType } from "./types";

export const PackageList: ItemType<PackageType> = {
  STD: { name: "Standard", extra: 0 },
  SAFE: { name: "Safe", extra: 50 },
  SUPER_SAFE: { name: "Super Safe", extra: 75 },
};

export const CountryList: ItemType<CountryType> = {
  USD: { source: USLogo, name: "USA", currency: "USD", rate: 2 },
  AUD: { source: AusLogo, name: "Australia", currency: "AUD", rate: 3 },
  HKD: { source: HongKongLogo, name: "HongKong", currency: "HKD", rate: 1 },
};
